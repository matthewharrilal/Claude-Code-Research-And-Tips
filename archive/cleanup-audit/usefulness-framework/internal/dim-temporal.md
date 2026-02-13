# Temporal Dimension Research

**Researcher:** dim-temporal
**Date:** 2026-02-13
**Task:** Define when file age and phase completion affect usefulness

---

## EXECUTIVE SUMMARY

**TEMPORAL VALUE IS A PROXY, NOT A PRIMARY DIMENSION.**

Age correlates with usefulness but does NOT determine it. The actual determinants are:
1. **Synthesis absorption** — Has value been extracted into a synthesis document?
2. **Forward consumption** — Is the file actively consumed by post-CD pipeline?
3. **Phase completion status** — Is the phase TRULY complete or just declared complete?

**Key Discovery:** "Phase completion" is UNSTABLE. Phases reopen frequently (DD re-audit happened after DD was "done"). The temporal decay curve is NOT monotonic — old files can suddenly become critical when phases reopen.

**Recommendation:** TEMPORAL should be a MODIFIER on other dimensions, not a standalone dimension. A 3-day-old scratchpad is NOT inherently more valuable than a 10-day-old synthesis — the synthesis dimension determines value, temporal just adds context.

---

## PHASE TIMELINE (Project Evolution)

From MEMORY.md and git history analysis:

```
Jan 30-Feb 2:  Foundation (Stage 1) — Component system perceptual audit
Feb 2-4:       DD (Stage 2: Density Dimension) — 6 explorations
Feb 4-6:       OD (Stage 3: Organizational Dimension) — 6 explorations
Feb 6-8:       AD (Stage 4: Axis Dimension) — 6 explorations
Feb 9-10:      Comprehensive Hierarchical Audit — 58-agent team, 78 files
Feb 11-13:     CD (Stage 5: Combination Dimension) — 6 explorations + 4 audit phases
Feb 12-13:     Skill Enrichment — Tension-composition + perceptual-auditing skills
Feb 13:        Cleanup Audit — This analysis
```

**Total project duration:** ~2 weeks (Jan 30 - Feb 13)

**Phase overlap observed:**
- DD re-audit happened AFTER DD was declared complete
- OD re-enrichment (43-agent team) happened AFTER OD was declared complete
- Foundation remediation sync happened weeks after Foundation phase "ended"

**Finding:** Phase completion is POROUS, not TERMINAL.

---

## TEMPORAL PATTERNS FROM MASTER VERDICT

### Pattern 1: Scratchpad Decay After Synthesis

**Knowledge-Architecture Scratchpads (12 directories, 338 files):**

| Directory | Team Size | Lines | Created | Synthesis Doc | Verdict |
|-----------|-----------|-------|---------|---------------|---------|
| `_comprehensive-audit/` | 58 agents | 9,500 | Feb 9 | MASTER-AUDIT-REPORT.md | **DELETE** |
| `_od-reenrichment/` | 43 agents | 15,000 | Feb 6 | OD-REENRICHMENT-SPEC.md | **DELETE** |
| `_ad-execution/` | 21 agents | 8,000 | Feb 8 | ACCUMULATED-IDENTITY-v2.md | **DELETE** |
| `_od-audit-scratchpad/` | 17 agents | 7,867 | Feb 6 | OD-GRANULAR-AUDIT-RESULTS.md | **DELETE** |
| `_workflow-metacognition/` | 9 agents | 4,240 | Feb 7 | WORKFLOW-METACOGNITION-ANALYSIS.md | **DELETE** |
| `_cd-research/` | 7 agents | 3,500 | Feb 11 | POST-CD-PIPELINE/README.md | **KEEP** |
| `_migration-research/` | 8 agents | 5,800 | Feb 11 | POST-CD-PIPELINE/README.md | **KEEP** |

**Temporal analysis:**

- **Age does NOT predict deletion:** `_cd-research/` (3 days old) → KEEP, `_comprehensive-audit/` (4 days old) → DELETE
- **Synthesis absorption is the signal:** Compression ratio 8.4:1 avg (88% noise) — scratchpads become redundant after synthesis
- **Forward consumption breaks the rule:** Only 2 of 12 directories are consumed by POST-CD-PIPELINE (saved from deletion despite synthesis)

**Decay curve:** Value drops IMMEDIATELY after synthesis completion (not gradually over time). A 1-hour-old scratchpad post-synthesis is equally deletable as a 2-week-old one.

---

### Pattern 2: Recent Work Gets Zero Protection

**Root-Level Folders (PROGRESS-audit/, _tension-test/):**

| Folder | Created | Age | Files | Verdict | Reason |
|--------|---------|-----|-------|---------|--------|
| PROGRESS-audit/ | Feb 2 | 11 days | 7 | **DELETE** | Exploratory research, never integrated |
| _tension-test/ | Feb 12 | 1 day | 104 | **DELETE 100, ARCHIVE 4** | Skills absorbed learnings |

**Analysis:**

- **PROGRESS-audit/** is 11 days old (oldest in root) → DELETE
- **_tension-test/** is 1 day old (NEWEST in root) → DELETE 96%
- **Recency provided ZERO protection** — skill integration status determined verdict

**Anti-pattern observed:** User assumed recent work = valuable. Auditors found "skill enrichment absorbed insights, HTMLs are existence proofs at best."

**Rule:** Temporal protection requires ACTIVE CONSUMPTION, not just recency.

---

### Pattern 3: CD Gets Full Protection (Recency + Quality + Relevance)

**CD Explorations (combination/):**

| Category | Files | Age | Verdict | Protection Factor |
|----------|-------|-----|---------|-------------------|
| 6 HTML explorations | 6 | 2 days | **KEEP ALL** | Crown jewel (39/40) + Track 2 exemplar |
| Phase 2 audit | 12 | 1 day | **KEEP ALL** | Primary quality verification |
| Phase 4 standalone | 350+ | <1 day | **KEEP ALL** | Systemic findings (S-01, S-02, S-03) |
| 343 screenshots | 343 | <1 day | **KEEP ALL** | Visual evidence for 39/40 claim |

**Temporal factors:**

1. **Most recent phase** (Feb 11-13) — NEWEST work in project
2. **Highest quality** (39/40 crown jewel) — BEST work in project
3. **Direct relevance** to Track 2 migration — FORWARD-CONSUMED

**Analysis:** Recency CORRELATES with protection, but causation flows the other way. CD is protected BECAUSE it's the current phase target, which CAUSES it to be recent. If CD had been built 2 weeks ago and Track 2 migration was starting tomorrow, CD would STILL be protected.

**Rule:** Temporal value derives from PIPELINE POSITION, not calendar position.

---

### Pattern 4: Completed Phase ≠ Deletable Phase

**DD/OD Explorations (oldest phases, Feb 2-6):**

| Phase | Age | Status | Verdict | Rationale |
|-------|-----|--------|---------|-----------|
| DD (density/) | 11 days | COMPLETE | **KEEP ALL 15** | 589 broken refs if deleted, alphabet of patterns |
| OD (organizational/) | 9 days | COMPLETE | **KEEP ALL 15** | OD-006 meta-discovery, Track 1 foundation |

**Deletion impact if ignored (from MASTER-VERDICT):**
> "589 broken references, 4 pipeline stages invalidated, Tier 2.5 pattern catalog destroyed, Track 1 AND Track 2 migration impossible"

**Analysis:**

- DD/OD are THE OLDEST explorations (Feb 2-6, 7-11 days old)
- DD/OD are COMPLETE (re-audit done, fixes applied)
- DD/OD are UNANIMOUSLY KEEP (verifier + adversary both agreed)

**Why?** Both verifier and adversary tested supersession hypothesis: "Does CD replace DD/OD?" Answer: NO. CD validates that DD+OD patterns work in combination. DD+OD are the alphabet (12 patterns), CD is sentences (combination grammar).

**Rule:** Phase completion status is IRRELEVANT. Forward-consumption status is EVERYTHING.

---

## TEMPORAL DECAY CURVES

### Curve 1: Scratchpad Files (Working → Synthesis → Archive)

```
Value
  ↑
  │ ████████████ (Working: 100% value)
  │ ████████████
  │ ████████████
  │ ███▓▓▓▓▓▓▓▓▓ (Synthesis event: value transfers)
  │ ▓▓▓░░░░░░░░░ (Post-synthesis: 12% value retained)
  │ ░░░░░░░░░░░░ (Forward-consumed exception: back to 100%)
  └─────────────→ Time
    0h   24h   2w
```

**Decay profile:**
- **Cliff drop** at synthesis completion (not gradual)
- **88% value evaporates** (compression ratio 8.4:1)
- **12% residual value** = attribution, debate records, screenshots, process evidence
- **Exception:** Forward-consumed scratchpads (like `_cd-research/`) retain 100% value indefinitely

---

### Curve 2: Exploration HTML Files (Build → Audit → Permanence)

```
Value
  ↑
  │ ████████████ (Build complete: 100% value)
  │ ████████████
  │ ████████████ (Audit validates: value INCREASES)
  │ ████████████
  │ ████████████ (Phase complete: value PERMANENT)
  │ ████████████
  └─────────────→ Time
    0h   24h   2w
```

**No decay observed.** Exploration HTMLs are:
- Reference implementations (DD-006 has 20+ refs, most-referenced artifact)
- Pattern exemplars (OD-006 "Organization IS Density" meta-discovery)
- Quality proofs (CD-006 39/40 crown jewel claim)

**Decay profile:** ZERO. These are load-bearing artifacts, not working files.

---

### Curve 3: Research Files (Discovery → Supersession Check → Permanence)

```
Value
  ↑
  │ ████████████ (R1-R5 discovery: 100% value)
  │ ████████████
  │ ████████████ (Skills built: supersession test)
  │ ████████████ (Test result: NOT superseded)
  │ ████████████
  │ ████████████ (Canonical status: permanent)
  └─────────────→ Time
    0h   24h   2w
```

**Decay profile:** ZERO. Research files (R1-R5) are:
- Canonical sources (337 findings)
- NOT superseded by skills (skills EXTEND research, don't replace)
- Hub documents (15-30+ inbound refs each)

From Support Zone audit:
> "R1-R5 = RESEARCH SOURCE — The 337 original findings that feed the pipeline
> Skills (tension-composition, perceptual-auditing) = PROCESS OPERATIONALIZATION — How to apply the research"

**Rule:** Discovery value is PERMANENT. Process value decays only if superseded.

---

## TEMPORAL PROTECTION FACTORS

### When Recency PROTECTS:

1. **Active development phase** — CD explorations (Feb 11-13) protected because Track 2 migration imminent
2. **Strategic planning** — POST-CD-PIPELINE (Feb 11-13 updates) protected because it's CURRENT strategy
3. **Evidence freshness** — Phase 4 screenshots (Feb 13) protected because they document LATEST systemic findings

**Protection mechanism:** Recency signals PIPELINE RELEVANCE, not inherent value.

---

### When Age CONDEMNS:

1. **Pre-provenance research** — PROGRESS-audit/ (Feb 2, before threading began) → DELETE
2. **Superseded working files** — _tension-test/ (Feb 12, skills absorbed) → DELETE 96%
3. **Completed phase scratchpads** — 10 of 12 KA underscore directories → DELETE

**Condemnation mechanism:** Age signals SYNTHESIS COMPLETION + ZERO FORWARD-CONSUMPTION, not staleness per se.

---

### When Age is IRRELEVANT:

1. **DD/OD explorations** — 11 days old, COMPLETE, → **KEEP ALL** (forward-consumed)
2. **Foundation synthesis** — 13 days old, → **KEEP** (canonical source)
3. **R1-R5 research** — 7-11 days old → **KEEP** (hub documents, not superseded)

**Irrelevance mechanism:** Forward-consumption overrides temporal signals entirely.

---

## PHASE COMPLETION STABILITY ANALYSIS

### "Complete" Phases That Reopened:

1. **DD Phase** — Declared complete Feb 4 → Retroactive re-audit Feb 6 → Re-enrichment discussion ongoing
2. **OD Phase** — Declared complete Feb 6 → OD re-enrichment (43-agent team, 92 files) → 16 fixes applied
3. **Foundation** — Declared complete Feb 2 → Remediation sync Feb 8 → ANTI-PATTERNS.md deletion discussion Feb 13

**Analysis:** "Phase completion" is a CLAIM, not a LOCK. Phases reopen when:
- New research findings (R3 re-analysis)
- Skill development (perceptual-auditing skill enrichment)
- Downstream dependencies (Track 2 migration planning surfaces gaps)

**Temporal volatility:** A file from a "complete" phase can become CRITICAL when that phase reopens. The 10-day-old DD-006-fractal.html is not just "old but kept" — it's ACTIVELY REFERENCED (20+ inbound refs) because DD patterns inform CD combination grammar.

---

## TEMPORAL VALUE MODEL

### Primary Equation:

```
Temporal Value = Pipeline Position × Synthesis Status × Consumption Status
```

Where:
- **Pipeline Position:** {pre-chain, in-chain, post-chain, future-chain}
- **Synthesis Status:** {working, synthesized, absorbed, extracted}
- **Consumption Status:** {dead-end, historical-ref, active-consumed, load-bearing}

**Examples:**

1. **`_tension-test/`** = post-chain × extracted × dead-end = **DELETE**
2. **`_cd-research/`** = in-chain × absorbed × active-consumed = **KEEP**
3. **DD-006-fractal.html** = in-chain × published × load-bearing = **KEEP** (despite age)
4. **PROGRESS-audit/** = pre-chain × working × dead-end = **DELETE** (despite content volume)

---

### Decay Modifiers:

**Accelerated decay (steeper curve):**
- Process logs (weaver-log.md, builder-log.md) — decay in hours
- Screenshot evidence (audit-screenshots/) — decay after audit complete
- Working state files (BUILD-STATE.md, FIX-STATE.md) — decay at phase transition

**Decelerated decay (flatter curve):**
- Synthesis documents (MASTER-AUDIT-REPORT.md) — decay only if superseded
- Hub documents (RESEARCH-SYNTHESIS.md) — zero decay (permanent)
- Reference implementations (CD-006.html) — zero decay (exemplar status)

**Anti-decay (value increases over time):**
- Meta-learnings (WORKFLOW-METACOGNITION-ANALYSIS.md) — value compounds as patterns repeat
- Pattern catalogs (12 DD+OD patterns) — value increases as combinations multiply
- Crown jewels (CD-006 39/40) — value increases as migration approaches

---

## TEMPORAL DECISION RULES

### Rule 1: Synthesis Completion Triggers Decay

**If:** Scratchpad → Synthesis document exists + compression ratio >5:1
**Then:** Scratchpad temporal value drops 80%+
**Exception:** Forward-consumed scratchpads retain full value

**Evidence:**
- `_od-audit-scratchpad/` (29 files, 7,867 lines) → OD-GRANULAR-AUDIT-RESULTS.md (688 lines) = 11.4:1 compression, 91% noise
- `_workflow-metacognition/` (10 files, 4,240 lines) → WORKFLOW-METACOGNITION-ANALYSIS.md (synthesis) = 4.8:1 compression, 79% noise

---

### Rule 2: Phase Completion Does NOT Trigger Decay

**If:** Phase declared "COMPLETE"
**Then:** Individual file value UNCHANGED (phase status is unstable)
**Evidence:** DD/OD both "COMPLETE" but KEEP ALL 15 files (589 broken refs if deleted)

---

### Rule 3: Recency Protects Only If Forward-Consumed

**If:** File created <3 days ago
**Then:** KEEP if forward-consumed by pipeline, DELETE if not
**Evidence:**
- `_tension-test/` (1 day old) → DELETE 96% (skills absorbed)
- `_cd-research/` (3 days old) → KEEP (POST-CD-PIPELINE consumes)

---

### Rule 4: Age Condemns Only If Synthesis Complete AND Zero Consumption

**If:** File created >7 days ago
**Then:** DELETE only if synthesized + zero forward-consumption
**Evidence:**
- DD-006-fractal.html (11 days old) → KEEP (20+ inbound refs, load-bearing)
- PROGRESS-audit/ (11 days old) → DELETE (never integrated, zero refs)

---

## TEMPORAL DIMENSION SCORING RUBRIC

**Temporal is NOT a primary dimension — it's a MODIFIER.**

### Temporal Modifier Score (-2 to +2):

**+2:** Recent + Active consumption
- Example: POST-CD-PIPELINE files (Feb 11-13, current strategy)
- Effect: Amplifies other dimension scores by 1.5x

**+1:** Recent OR Active consumption
- Example: CD-006.html (recent, 39/40 crown jewel)
- Effect: Amplifies other dimension scores by 1.2x

**0:** Neutral temporal status
- Example: R1-R5 research (7-11 days old, hub documents)
- Effect: No modification to other dimension scores

**-1:** Old + Synthesized
- Example: `_comprehensive-audit/` (4 days old, absorbed into MASTER-AUDIT-REPORT)
- Effect: Reduces other dimension scores by 0.8x

**-2:** Old + Synthesized + Zero consumption
- Example: PROGRESS-audit/ (11 days old, never integrated)
- Effect: Reduces other dimension scores by 0.5x

---

## OPEN QUESTIONS

### Q1: What is the decay half-life of screenshot evidence?

**Observation:** audit-screenshots/ contains cycle-1 and DD-reaudit screenshots from Feb 4-7. Fixes were applied Feb 8. Are these PRE-FIX or POST-FIX screenshots?

**Implication:** If PRE-FIX, they're evidence for completed work (low value). If POST-FIX, they're verification evidence (higher value). Temporal metadata (PRE/POST labels) would clarify.

**Recommendation:** Add temporal markers (PRE-FIX vs POST-FIX) to screenshot directories.

---

### Q2: Does phase reopening reset the temporal clock?

**Scenario:** DD was "complete" Feb 4. DD re-audit happened Feb 6. Does DD-006-fractal.html's temporal age reset from 9 days to 7 days?

**Current model:** NO — temporal age is creation date, not last-modified date.

**Alternative model:** YES — temporal age is last-SIGNIFICANT-modification date (where "significant" = audit, fix, enrichment, not just typo correction).

**Implication:** If phase reopening resets temporal clock, then "old" files from reopened phases would get recency protection.

**Recommendation:** Track PHASE-AGE separately from FILE-AGE. DD phase reopened Feb 6, so DD-specific files have phase-age of 7 days (not 11 days).

---

### Q3: Is 3 days the cutoff for "recent"?

**Observation patterns:**
- <1 day: CD Phase 4 standalone (kept for systemic findings)
- 1-3 days: CD explorations, POST-CD-PIPELINE (kept for current work)
- 3-7 days: Most KA scratchpads (deleted if absorbed)
- 7-11 days: DD/OD explorations, R1-R5 research (kept for forward-consumption)
- >11 days: PROGRESS-audit (deleted for zero integration)

**Current threshold:** No hard cutoff observed. Temporal value is RELATIVE to synthesis + consumption status.

**Alternative:** Set 3-day recency bonus (+1 modifier) and 10-day age penalty (-1 modifier) as heuristics.

---

### Q4: Do meta-learnings appreciate over time?

**Candidate:** WORKFLOW-METACOGNITION-ANALYSIS.md discovered "binary rule principle" — judgment rules achieve ~0% agent compliance.

**Age:** 6 days old (Feb 7)

**Value trajectory:** INCREASING. This insight has been applied to:
- Agent team design (13 subsequent teams)
- Skill development (guardrails vs suggestions)
- Cleanup audit framework (binary verdicts vs judgment calls)

**Implication:** Meta-learnings are ANTI-TEMPORAL — value increases as pattern validation accumulates.

**Recommendation:** Add "meta-learning" flag to provenance headers. These files resist temporal decay.

---

## RECOMMENDATIONS FOR TEMPORAL DIMENSION

### 1. Temporal is a MODIFIER, not a PRIMARY dimension

**Rationale:** Age/recency do not determine value. Synthesis absorption + forward consumption determine value. Temporal signals CORRELATE but don't CAUSE.

**Implementation:** Temporal dimension score modifies other dimension scores (multiplicative, not additive).

---

### 2. Track Phase-Age separately from File-Age

**Rationale:** Phase reopening resets temporal context for phase-specific files. DD-006-fractal.html is 11 days old (file-age) but 7 days old (phase-age since DD re-audit).

**Implementation:** Provenance headers should include:
- `CREATED: 2026-02-02` (file-age)
- `PHASE-LAST-ACTIVE: 2026-02-06` (phase-age)

---

### 3. Add Temporal Metadata to Evidence Files

**Rationale:** Screenshots, logs, and state files need PRE/POST/DURING markers to clarify their temporal relationship to events.

**Implementation:**
- `audit-screenshots/PRE-FIX/` vs `audit-screenshots/POST-FIX/`
- `BUILD-STATE.md` → Add "State as of: 2026-02-11 18:30" timestamp

---

### 4. Flag Meta-Learnings as Anti-Temporal

**Rationale:** Some files (workflow analysis, pattern discoveries, strategic insights) APPRECIATE over time as validation accumulates.

**Implementation:** Add provenance flag:
```markdown
<!-- META-LEARNING: Value increases with pattern validation -->
```

---

### 5. Temporal Thresholds are Context-Dependent

**Rationale:** In a 2-week project, 3 days is "old." In a 2-year project, 3 months might be "recent." Temporal cutoffs must be relative to project duration.

**Implementation:** Define temporal zones as PERCENTAGES of total project duration:
- Recent: Last 20% of project duration (in this case, Feb 10-13)
- Current: Last 50% of project duration (Feb 6-13)
- Historical: First 50% of project duration (Jan 30-Feb 5)

---

## FINAL TEMPORAL VALUE FORMULA

```
Temporal_Score = Base_Temporal_Modifier × Phase_Stability_Factor × Consumption_Multiplier

Where:
  Base_Temporal_Modifier =
    if (file_age < project_duration * 0.2): +2 (recent)
    elif (file_age < project_duration * 0.5): +1 (current)
    elif (file_age < project_duration * 1.0): 0 (historical)
    else: -1 (pre-project)

  Phase_Stability_Factor =
    if (phase_status == "REOPENED"): 1.5 (active again)
    elif (phase_status == "COMPLETE-STABLE"): 1.0 (normal)
    elif (phase_status == "DEPRECATED"): 0.5 (decaying)

  Consumption_Multiplier =
    if (forward_consumed): 2.0 (doubles temporal value)
    elif (synthesis_absorbed): 0.3 (70% decay)
    elif (never_consumed): 0.1 (90% decay)
```

**Application:**

1. **CD-006.html:** Base +2 (recent) × 1.0 (stable) × 2.0 (consumed) = **+4.0** (temporal amplification)
2. **_cd-research/:** Base +1 (current) × 1.0 (stable) × 2.0 (consumed) = **+2.0** (temporal boost)
3. **DD-006-fractal.html:** Base 0 (historical) × 1.5 (reopened) × 2.0 (consumed) = **+3.0** (phase reopening protects)
4. **_tension-test/:** Base +2 (recent) × 1.0 (stable) × 0.1 (never consumed) = **+0.2** (recency didn't save it)
5. **PROGRESS-audit/:** Base -1 (old) × 0.5 (deprecated) × 0.1 (never consumed) = **-0.05** (temporal condemned)

---

## CONCLUSION

**Temporal value is DERIVATIVE, not DETERMINATIVE.**

The temporal dimension answers: "When was this created/modified?" but usefulness depends on "Has this been absorbed into synthesis?" and "Is this actively consumed by the pipeline?"

**Key Insight:** A 3-day-old scratchpad (tension-test) is LESS useful than a 10-day-old synthesis (RESEARCH-SYNTHESIS.md) because synthesis status + forward consumption dominate temporal signals.

**Temporal's Role:** A multiplicative modifier on other dimension scores. Recency amplifies value IF the file is forward-consumed. Age diminishes value IF the file is synthesized + unconsumed.

**The Decay Curve That Matters:** Synthesis completion triggers an immediate 80-90% value drop (not gradual temporal decay). Forward consumption prevents that drop entirely, regardless of age.

**Phase Completion is Unstable:** "Complete" phases reopen frequently. Temporal protection must account for phase-age (time since last phase activity) not just file-age.

**Recommendation:** Temporal should MODIFY other dimension scores, not stand alone. Use the formula above to calculate temporal amplification/reduction, then apply to primary dimension scores (provenance, pipeline-relevance, supersession, etc.).
