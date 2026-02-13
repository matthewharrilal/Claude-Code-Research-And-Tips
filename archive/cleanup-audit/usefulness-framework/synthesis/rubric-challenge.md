# RUBRIC CHALLENGE — Meta-Adversarial Analysis

**Challenger:** meta-adversary (teammate)
**Date:** 2026-02-13
**Target:** scoring-rubric.md v1.0
**Sources:** rubric (1,543 lines), calibration (878 lines), taxonomy (954 lines)
**Goal:** Challenge the rubric's STRUCTURE, BIASES, BLIND SPOTS, and ASSUMPTIONS

---

## EXECUTIVE SUMMARY

**The rubric is a measurement instrument pretending to be neutral but actually encoding the first audit's biases as mathematical weights.**

**7 Critical Challenges:**
1. **Circular calibration** — Rubric tuned to match audit it's supposed to replace
2. **Missing unknown-unknown detector** — No mechanism for buried crown jewels
3. **Collection effect ignored** — DD as alphabet deleted file-by-file
4. **Deletion bias TOO aggressive** — 40pt threshold could delete 60-70pt borderline files
5. **Override rules are manual guardrails** — Not automated, rely on human detection
6. **Aggregation hides weak signals** — Multiplication punishes borderline-useful files
7. **Rubric is STATIC** — No learning mechanism as files prove valuable post-deletion

**Verdict:** Rubric is FUNCTIONAL (100% calibration accuracy) but FRAGILE (untested on unknown files). Proceed with HUMAN REVIEW of 40-70pt range.

---

## I. CIRCULAR CALIBRATION PROBLEM

### The Core Issue

**Rubric v1.0 calibrated against 10 known files from MASTER-VERDICT.md.**
**MASTER-VERDICT.md created by first audit (verifier + adversary).**
**Rubric designed to be "more aggressive" than first audit.**

**Circularity:**
```
First Audit → MASTER-VERDICT (expected outcomes)
   ↓
Rubric tuned to match MASTER-VERDICT
   ↓
Rubric claims 100% accuracy
   ↓
But accuracy = "matches the audit it's supposed to improve"
```

### Evidence

**From calibration-results.md:488-509:**
> "Rubric Accuracy: 8/10 matches (80%)"
> "Disagreements: 2 files (CD-005, POST-CD-PIPELINE)"
> "Verdict: Rubric is **MORE AGGRESSIVE** than first audit (2/2 disagreements favor DELETE)"

**Problem:** The rubric is MORE aggressive on the 2 files it disagrees with, but IDENTICAL on the 8 files it agrees with. This means:
- Rubric learned the audit's verdicts (8 matches)
- Rubric applied "maximum deletion bias" to contested cases (2 disagreements)
- **But this assumes the audit's 8 verdicts were CORRECT**

### What If the Audit Was Wrong?

**Hypothetical Scenario:**
- First audit KEPT file X because "has a role, synthesis references it"
- Rubric KEEPS file X (provenance=10, pipeline=5, score=15... wait, that's DELETE)
- Calibration shows MISMATCH → rubric weights adjusted
- **New rubric now KEEPS file X to match audit verdict**

**The rubric becomes a mathematical encoding of the audit's judgment — NOT an independent evaluation framework.**

### Test This

**Blind test:** Apply rubric to 50 files NEVER seen by first audit.
- If rubric produces same verdicts as human judgment → rubric is valid
- If rubric produces DIFFERENT verdicts → circular calibration problem

**Prediction:** Rubric will perform well on files SIMILAR to calibration set (T1 synthesis, scratchpads, explorations) but FAIL on edge cases (implicit dependencies, collections with weak individual scores, files valuable for unknown future work).

---

## II. UNKNOWN-UNKNOWN DETECTOR MISSING

### The Buried Crown Jewel Problem

**From scoring-rubric.md:918-950 (Edge Case 3):**
> "Buried Crown Jewel (Zero Refs, High Value)"
> "Detection Challenge: How to detect unique value?"
> "Proposed Enhancement: Scan for finding IDs not in synthesis"

**This is a KNOWN limitation, not a solved problem.**

**Current rubric scoring for buried crown jewel:**
- Provenance: 0 (no refs)
- Pipeline: 0 (not forward-consumed)
- Soul: 0 (neutral)
- Supersession: 10 (not superseded if unique)
- Reproducibility: 10 (unique findings)
- **Total: 20 pts → WEAKLY INTEGRATED → ARCHIVE**

**But what if the file contains:**
- The ONLY record of a critical decision (font choice rationale)
- The ONLY evidence of a systemic pattern (epidemic discovery)
- The ONLY perceptual characterization that makes a finding actionable

**The rubric has NO mechanism to detect these.**

### What the Rubric Misses

**Type 1: Unique Decision Rationale**
- Example: Why 'DM Sans' over 'Inter' (font decision provenance)
- Current score: 0 refs → 0pts provenance → DELETE
- Actual value: CRITICAL (prevents future font debates)

**Type 2: Lone Evidence of Systemic Pattern**
- Example: Single file documenting 2px border epidemic origin
- Current score: 0 refs (pre-discovery) → DELETE
- Actual value: CRITICAL (archaeology for future audits)

**Type 3: Perceptual Characterization**
- Example: "Labels whisper when they should speak" (OD-F-008)
- Current score: In synthesis (operational) but NOT in synthesis (perceptual)
- Rubric compression validator: "Operational signal preserved" → DELETE source
- Actual value: HIGH (perceptual language enables future audits)

### Proposed Fix

**Add Unknown-Unknown Detector:**
```python
def detect_unknown_unknown(file):
    # Pattern 1: Unique concepts not in synthesis
    concepts_in_file = extract_concepts(file)
    concepts_in_synthesis = extract_concepts(all_synthesis_files)
    unique_concepts = concepts_in_file - concepts_in_synthesis

    if len(unique_concepts) > 5:
        return {"warning": "POTENTIAL_BURIED_VALUE", "unique_count": len(unique_concepts)}

    # Pattern 2: Decision rationale (contains "why not X" language)
    if contains_pattern(file, r"why (not|over|instead of)"):
        return {"warning": "DECISION_RATIONALE", "type": "comparative"}

    # Pattern 3: Perceptual language
    perceptual_markers = ["whisper", "speak", "feels like", "experience", "visceral"]
    if contains_any(file, perceptual_markers):
        return {"warning": "PERCEPTUAL_CHARACTERIZATION", "markers": found}

    return None
```

**Threshold:** If unknown-unknown detector triggers → REQUIRE HUMAN REVIEW before deletion

---

## III. COLLECTION EFFECT IGNORED

### The Pattern Alphabet Problem

**From dimension-taxonomy.md:545-567 (Emergent Properties):**
> "Type 1: Pattern Alphabet Emergence"
> "Example: DD explorations (6 files) form compositional vocabulary"
> "Deletion test: Remove DD-006 (1/6 = 16.7%) → Lose 100% of fractal meta-pattern"

**Rubric has emergence validator (Rule in Section VIII) — but it requires DETECTION of emergent properties BEFORE deletion.**

**How does rubric detect DD collection has emergent properties?**

**From scoring-rubric.md:528-547 (Emergence Validator):**
> "IF file IN collection WITH emergent_properties:"
> "VETO individual deletion"

**But HOW is collection identified? How are emergent properties detected?**

### The Detection Problem

**Current rubric assumes:**
1. Collections are KNOWN (DD, OD, AD, CD, audit phases)
2. Emergent properties are DOCUMENTED (in taxonomy)
3. Human explicitly flags collection before deletion

**But what if:**
- Collection is NOT labeled as such (6 files, same pattern, but no formal "collection" designation)
- Emergent properties EMERGE only after partial deletion (losing 2/6 reveals pattern alphabet)
- Collection spans MULTIPLE directories (DD in showcase/, research in knowledge-architecture/)

### Example: DD Deleted File-by-File

**Scenario:** Apply rubric to DD-001 through DD-006 individually (no collection awareness)

**Individual Scores (hypothetical):**
- DD-001: 35pts (WEAKLY INT, contested)
- DD-002: 38pts (WEAKLY INT, contested)
- DD-003: 42pts (REFERENCED, borderline KEEP)
- DD-004: 65pts (HUB, KEEP)
- DD-005: 37pts (WEAKLY INT, contested)
- DD-006: 70pts (HUB, KEEP)

**Without emergence validator:** 3/6 deleted (DD-001, DD-002, DD-005)
**With emergence validator:** 0/6 deleted (collection integrity = 100% required)

**But emergence validator only triggers IF human identifies "this is a collection."**

**What if rubric executor doesn't realize DD is a collection?**
→ 3 files deleted individually
→ Pattern alphabet destroyed
→ Migration blocked

### Proposed Fix

**Automated Collection Detection:**
```python
def detect_collection(files):
    # Pattern 1: Shared naming convention (DD-001, DD-002, ...)
    if has_sequential_naming(files):
        return {"type": "SEQUENTIAL_SERIES", "count": len(files)}

    # Pattern 2: Same directory + similar structure
    if same_directory(files) and similar_structure(files):
        return {"type": "PARALLEL_EXPLORATIONS", "count": len(files)}

    # Pattern 3: Cross-references within collection
    internal_refs = count_internal_refs(files)
    external_refs = count_external_refs(files)
    if internal_refs / (internal_refs + external_refs) > 0.3:
        return {"type": "INTERCONNECTED_COLLECTION", "density": internal_refs}

    return None
```

**Threshold:** If collection detected → Test for emergent properties → VETO individual deletion

---

## IV. DELETION BIAS TOO AGGRESSIVE

### The 40pt Threshold Problem

**From scoring-rubric.md:23-40 (Design Philosophy):**
> "Traditional: 0-100 scale, 50+ = keep"
> "This rubric: 0-105 scale, **40+ = keep** (38% higher bar)"
> "Bias Implementation: Guilty Until Proven Innocent"

**Question:** Is 40pts the RIGHT threshold, or is it TUNED to match audit verdicts?

### Calibration Evidence

**From calibration-results.md:694-706 (Score Distribution):**
| Threshold | Label | Files in Test Set | Action |
|-----------|-------|-------------------|--------|
| **80-105** | CRITICAL | 4 | NEVER DELETE |
| **60-79** | HUB | 1 (CD-005=60.9) | KEEP |
| **40-59** | REFERENCED | **0** | KEEP |
| **20-39** | WEAKLY INT | **0** | ARCHIVE |
| **1-19** | ISOLATED | 1 (OD-scratchpad=15.3) | DELETE |

**Zero files in 40-59pt range. Zero files in 20-39pt range.**

**This means:**
- Threshold calibrated on files with EXTREME scores (70+ or 15-)
- No evidence threshold works for BORDERLINE files (40-70pts)
- CD-005 at 60.9pts is "barely above threshold" but still 20pts above cutoff

### What About Files Scoring 45pts?

**Hypothetical file:**
- Provenance: 15 (3-7 refs, referenced)
- Pipeline: 5 (bibliographic citation)
- Soul: 0 (neutral)
- Supersession: 15 (not superseded)
- Reproducibility: 10 (unique process insight)
- **Total: 45pts → REFERENCED → KEEP**

**Is this file ACTUALLY valuable, or did it barely pass an arbitrary threshold?**

**Test:** If threshold were 50pts (traditional), would this file be deleted?
- YES → file is borderline, DELETE is reasonable
- NO → file is solidly KEEP

**At 45pts, file is 5pts above deletion. One dimension adjustment (supersession 15→10) → 40pts → still KEEP but barely.**

### The CD-005 Edge Case

**From calibration-results.md:709-724 (CD-005 at 60.9pts):**
> "CD-005 scored 33/40 in audit (weakest CD)"
> "Rubric scores 60.9pts (HUB, barely above 60pt threshold)"
> "Pipeline dimension (30pts) saves it — forward-consumed by HANDOFF-CD-TO-MIGRATION"

**Question:** Is pipeline consumption ENOUGH to justify keeping a file with quality gaps?

**Audit found:**
- Responsive bugs (bento grid overflow at 768px)
- Weakest of 6 CDs (33/40 vs others 37-39/40)
- Multiple HIGH severity issues

**Rubric says:** KEEP (60.9pts, forward-consumed)

**What if POST-CD-PIPELINE citation was INCIDENTAL?**
- File mentioned in handoff doc as "CD-005 tested multi-axis but had issues"
- This is a BIBLIOGRAPHIC citation, not ACTIVE consumption
- Current rubric scores this as Pipeline=30 (forward-consumed)
- **Should actually be Pipeline=5 (bibliographic) → Total=35.9pts → WEAKLY INT → ARCHIVE**

**The rubric's binary test (listed in BUILT ON = 30pts) doesn't distinguish DEPTH of consumption.**

### Proposed Fix

**Split pipeline dimension into 3 tiers:**
- **ACTIVE DEPENDENCY (30pts):** File is READ and APPLIED (research packages, explorations)
- **REFERENCE MATERIAL (15pts):** File is CITED as example or evidence (handoff docs mention it)
- **BIBLIOGRAPHIC (5pts):** File is ACKNOWLEDGED in provenance but not used (synthesis credits source)

**Recalculate CD-005:**
- Pipeline: 15pts (reference material, not active dependency)
- **New Total: 45.9pts → REFERENCED → still KEEP but closer to threshold**

---

## V. OVERRIDE RULES ARE MANUAL GUARDRAILS

### The Automation Problem

**From scoring-rubric.md:716-799 (Override Rules):**
9 override rules:
- 5 absolute protections (ALWAYS KEEP)
- 4 forced deletions (ALWAYS DELETE)

**All overrides require MANUAL detection:**
- Rule 1 (T1 synthesis) → Must check `if file IN perceptual-audit-v2/synthesis/`
- Rule 2 (CLAUDE.md) → Must check `if filename = "CLAUDE.md"`
- Rule 6 (soul-dangerous) → Must check `if file_contains(border-radius > 0)`

**What if executor misses a check?**

### Example: Missing Soul-Dangerous Check

**File:** design-extraction/archive/tokens/spacing.md
**Contains:** `border-radius: 4px` (SOUL VIOLATION)
**Should trigger:** Rule 6 (soul-dangerous epidemic) → DELETE IMMEDIATELY

**But rubric executor must:**
1. Read file contents (not just metadata)
2. Parse CSS values
3. Check against soul rules
4. Apply -20pt penalty

**If executor only checks METADATA (refs, threading, consumption):**
- File scores 0 refs → 0pts → DELETE (correct outcome)
- But NOT for right reason (soul-dangerous, not isolated)
- **If file had 8 refs from SUPERSEDED sources:**
  - Provenance: 0 (no threading)
  - Ref Density: 0 (SUPERSEDED refs weighted 0.1×)
  - Soul: 0 (MISSED the violation)
  - **Total: 0pts → DELETE (correct outcome, WRONG reason)**

**Risk:** Soul-dangerous files with HIGH provenance might PASS threshold if validator doesn't run.

**Example:**
- archive/tokens/colors.md has 18 refs (all from old card-system)
- Contains `border-radius: 8px`
- **If soul validator doesn't run:**
  - Provenance: 25 (8-17 weighted refs)
  - Pipeline: 0
  - Soul: 0 (MISSED)
  - Total: 25pts
  - **Verdict: WEAKLY INT → ARCHIVE (should be DELETE IMMEDIATELY)**

### Proposed Fix

**Make override rules AUTOMATED PRE-CHECKS:**
```python
def apply_overrides_before_scoring(file):
    # FORCED PROTECTIONS (before scoring)
    if file.path.contains("perceptual-audit-v2/synthesis/"):
        return {"verdict": "CRITICAL", "reason": "T1_PROTECTION", "score": 100}

    if file.name == "CLAUDE.md":
        return {"verdict": "CRITICAL", "reason": "CLAUDE_MD_PROTECTION", "score": 100}

    # FORCED DELETIONS (before scoring)
    if file.contains_pattern(r"border-radius:\s*[1-9]"):
        return {"verdict": "DANGEROUS", "reason": "SOUL_VIOLATION", "score": -20}

    if file.contains_pattern(r"box-shadow"):
        return {"verdict": "DANGEROUS", "reason": "SOUL_VIOLATION", "score": -20}

    # If no override triggered, proceed to scoring
    return None
```

**Execution order:**
1. Check overrides FIRST (automated)
2. If override triggered → SKIP scoring, apply verdict
3. If no override → Proceed to dimension scoring

---

## VI. AGGREGATION FORMULA HIDES WEAK SIGNALS

### The Multiplication Problem

**From scoring-rubric.md:38 (Bias Implementation):**
> "Aggregation Punishes Mediocrity:"
> "Formula uses MULTIPLICATION (weak scores cascade to zero)"
> "Example: (5 provenance × 0.5 structural) = 2.5 final (DELETE)"

**Wait — the rubric uses ADDITION, not multiplication.**

**From scoring-rubric.md:556-595 (Aggregation Formula):**
```
STEP 1: primary_score = provenance + pipeline + soul
STEP 2: secondary_score = supersession + ref_density + reproducibility + temporal
STEP 3: raw_score = primary_score + secondary_score
STEP 4: modified_score = raw_score × structural_multiplier
```

**This is ADDITION with one structural multiplier.**

**The "multiplication punishes mediocrity" claim (line 38) is WRONG.**

### Actual Aggregation Behavior

**File with mediocre scores:**
- Provenance: 10
- Pipeline: 5
- Soul: 0
- Supersession: 7
- Ref Density: 2
- Reproducibility: 5
- Temporal: 0
- **Primary: 15**
- **Secondary: 14**
- **Raw: 29**
- **Structural (depth 3): 29 × 0.9 = 26.1**
- **Verdict: WEAKLY INTEGRATED → ARCHIVE**

**If formula used multiplication:**
- Score = (10 × 5 × 1) × (7 × 2 × 5 × 1) = 50 × 70 = 3,500 (nonsensical)

**The rubric CLAIMS to punish mediocrity via multiplication but ACTUALLY uses addition.**

**Problem:** Addition allows weak files to accumulate points across dimensions.

**Example:**
- File X: 5 provenance + 5 pipeline + 5 supersession + 5 ref density + 5 reproducibility = 25pts (WEAKLY INT)
- File Y: 25 provenance + 0 pipeline + 0 supersession + 0 ref density + 0 reproducibility = 25pts (WEAKLY INT)

**File X is mediocre across all dimensions. File Y is strong in ONE dimension.**

**Should they have same score? Rubric says YES (both 25pts).**

**But intuitively:**
- File Y (strong provenance, hub status) has FOCUSED value
- File X (weak everywhere) has DIFFUSE value

**Which is more deletable?**
- Argument for deleting X: No strong signal, just noise accumulation
- Argument for deleting Y: Single point of failure, no redundancy

**The rubric doesn't distinguish these cases.**

### Proposed Fix

**Add dimension CONCENTRATION metric:**
```python
def calculate_concentration(scores):
    # Measure how "spikey" vs "flat" the score distribution is
    max_score = max(scores.values())
    total_score = sum(scores.values())
    concentration = max_score / total_score

    # High concentration (0.8+) = strong in one dimension (focused value)
    # Low concentration (0.2-) = weak across all dimensions (diffuse value)

    if concentration > 0.8 and total_score < 40:
        return {"warning": "SINGLE_DIMENSION_DEPENDENCY", "dimension": max_dimension}

    if concentration < 0.3 and total_score < 40:
        return {"warning": "DIFFUSE_MEDIOCRITY", "action": "PREFER_DELETE"}
```

**Use concentration as tiebreaker:**
- Two files, both 35pts
- File A: high concentration (30 pipeline, 5 others) → KEEP (focused value)
- File B: low concentration (7 across 5 dimensions) → DELETE (diffuse mediocrity)

---

## VII. RUBRIC IS STATIC — NO LEARNING

### The Feedback Loop Problem

**Rubric assumes:**
1. Dimensions are KNOWN (provenance, pipeline, soul, etc.)
2. Weights are FIXED (35% provenance, 30% pipeline)
3. Thresholds are CALIBRATED (40pts = KEEP)

**But what happens AFTER deletion?**

**Scenario 1: Deleted file proves valuable later**
- File X scored 35pts → WEAKLY INT → ARCHIVED
- 2 weeks later: POST-CD-PIPELINE needs File X for migration
- File must be RESTORED from archive
- **Rubric learns:** Pipeline dimension UNDERWEIGHTED (file had latent pipeline value)

**Scenario 2: Kept file proves useless later**
- File Y scored 65pts → HUB → KEPT
- 2 weeks later: POST-CD-PIPELINE completes, File Y never consumed
- File Y remains in repo (clutter)
- **Rubric learns:** Provenance dimension OVERWEIGHTED (high refs didn't mean high value)

**Current rubric has NO mechanism to learn from post-deletion experience.**

### Proposed Fix

**Add post-deletion tracking:**
```python
# At deletion time
deletion_manifest = {
    "file": "path/to/file.md",
    "score": 35,
    "verdict": "WEAKLY_INTEGRATED",
    "action": "ARCHIVE",
    "dimensions": {
        "provenance": 10,
        "pipeline": 5,
        ...
    },
    "deletion_date": "2026-02-13"
}

# 2 weeks later, track actual usage
usage_log = {
    "file": "path/to/file.md",
    "restored": False,  # or True if needed from archive
    "referenced_by_new_work": [],  # list of new files citing it
    "forward_consumption": False,  # was it consumed by POST-CD work?
}

# If file was restored OR referenced by new work
if usage_log["restored"] or len(usage_log["referenced_by_new_work"]) > 0:
    # File deletion was WRONG
    # Analyze why: which dimension was underweighted?
    if usage_log["forward_consumption"] and deletion_manifest["dimensions"]["pipeline"] < 30:
        print(f"Pipeline dimension underweighted: {file} had latent value")
        # Adjust pipeline weights for future runs
```

**Use tracking data to:**
1. Identify false negatives (files deleted but later needed)
2. Identify false positives (files kept but never used)
3. Adjust dimension weights for future cleanup phases

**Example weight adjustment:**
- 10 files scored 35-45pts (WEAKLY INT/REFERENCED boundary)
- 3 files later restored (needed for POST-CD work)
- **Lesson:** Pipeline dimension underweighted in 35-45pt range
- **Adjustment:** Increase pipeline weight 30% → 35%, decrease provenance 35% → 30%

---

## VIII. RUBRIC BIASES FROM FIRST AUDIT

### What Did the First Audit Optimize For?

**From MASTER-VERDICT context:**
- Verifier optimized for SAFETY (keep contested files)
- Adversary optimized for AGGRESSIVENESS (delete contested files)
- Master verdicts sided with VERIFIER on most files

**Verifier's reasoning:**
- "Has a role" → KEEP
- "Synthesis references it" → KEEP
- "Might be needed later" → KEEP

**Adversary's reasoning:**
- "Fully superseded" → DELETE
- "No forward consumption" → DELETE
- "Compression ratio proves synthesis absorbed" → DELETE

**Rubric claims to be MORE AGGRESSIVE than first audit.**

**But calibration shows:**
- 8/10 matches (agrees with audit)
- 2/10 disagreements (both favor DELETE)

**Rubric is SELECTIVELY aggressive:**
- Agrees with audit on obvious cases (T1 = KEEP, node_modules = DELETE)
- Disagrees with audit on contested cases (OD-scratchpad, CD-005)

**This means rubric inherited audit's OBVIOUS verdicts but applied "maximum deletion bias" to CONTESTED verdicts.**

### Dimension Weights Encode Audit Biases

**Provenance = 35% (highest weight)**
- Audit heavily weighted "has a role in provenance chain"
- Files with threading headers got strong KEEP arguments
- **Rubric encodes this as 35% weight (highest of all dimensions)**

**Pipeline = 30% (second-highest weight)**
- Audit heavily weighted "forward consumption" test
- Files in POST-CD-PIPELINE got auto-KEEP
- **Rubric encodes this as 30% weight**

**Soul = 20% (third-highest weight)**
- Audit heavily weighted "soul violations are catastrophic"
- Soul-dangerous files got auto-DELETE
- **Rubric encodes this as -20pts (negative score)**

**Temporal = 5% (lowest weight)**
- Audit found "recent work gets zero protection" (_tension-test/ deleted at 1 day old)
- **Rubric encodes this as 5% weight (LOWEST)**

**The dimension weights ARE the audit's biases, expressed as percentages.**

### What Biases Might Be Wrong?

**Bias 1: Provenance = 35% (maybe too high)**
- High provenance ≠ high value if references are EPIDEMIC propagation (2px border)
- Threading header alone provides minimal value (Phase 2B threaded 250 files, many deletable)
- **Counter-argument:** Provenance is NECESSARY but not SUFFICIENT (need pipeline too)

**Bias 2: Temporal = 5% (maybe too low)**
- Age correlates with phase completion (old = likely superseded)
- Recent files may have unabsorbed insights (pre-synthesis)
- **Counter-argument:** Phase completion is POROUS (DD reopened after "complete")

**Bias 3: Structural = 5% (maybe too high for agents)**
- Agents receive explicit paths (nesting depth irrelevant)
- But 5% weight still affects scores
- File at depth 8 gets 0.5× multiplier (50% penalty for agent-irrelevant factor)
- **Counter-argument:** Humans browse files, 5% penalty for deep files is reasonable

### Test This

**Apply rubric with ALTERNATIVE weights:**
- Provenance: 25% (down from 35%)
- Pipeline: 40% (up from 30%)
- Temporal: 10% (up from 5%)
- Structural: 0% (down from 5%, eliminate agent-irrelevant factor)

**Recalculate test files:**
- Does CD-005 still score 60.9pts? (pipeline boost should increase it)
- Does OD-scratchpad still score 15.3pts? (provenance reduction shouldn't affect it)
- Do any borderline files (40-50pts) change verdicts?

**If alternative weights produce SAME verdicts → rubric is robust.**
**If alternative weights produce DIFFERENT verdicts → rubric is FRAGILE (tuned to audit biases).**

---

## IX. SPECIFIC RUBRIC MODIFICATIONS

### Modification 1: Add Unknown-Unknown Detector

**Location:** Section III (Deep-Score Rubric), after Step 4 (Structural Modifier)

**Add Step 4.5:**
```
STEP 4.5: UNKNOWN-UNKNOWN DETECTION (pre-validator check)

FOR EACH file WITH score < 40:
  Check for buried crown jewel indicators:
    □ Unique concepts not in synthesis (5+ unique terms)
    □ Decision rationale language ("why not X", "instead of Y")
    □ Perceptual characterization (visceral language)
    □ Lone evidence of pattern (finding ID not elsewhere)

  IF any indicator triggered:
    WARN "POTENTIAL_BURIED_VALUE"
    REQUIRE human review before deletion
```

**Impact:** Prevents deletion of 0-ref files with unique insights.

---

### Modification 2: Automated Collection Detection

**Location:** Section III (Deep-Score Rubric), Step 4 (Validators), add to Emergence Validator

**Replace line 542:**
```
IF file IN collection WITH emergent_properties:
```

**With:**
```
collection = detect_collection(file)  # automated detection
IF collection AND collection.has_emergent_properties():
```

**Add detection algorithm:**
```python
def detect_collection(file):
    # Pattern 1: Sequential naming (DD-001, DD-002)
    siblings = glob(f"{file.directory}/*")
    if has_sequential_pattern(siblings):
        return Collection(type="SEQUENTIAL", files=siblings)

    # Pattern 2: High internal cross-reference density
    internal_refs = count_refs_within(siblings)
    external_refs = count_refs_outside(siblings)
    if internal_refs / (internal_refs + external_refs) > 0.3:
        return Collection(type="INTERCONNECTED", files=siblings)

    return None
```

**Impact:** Automatically detects DD/OD/AD/CD collections without manual flagging.

---

### Modification 3: Split Pipeline Dimension (3 Tiers)

**Location:** Section III, Step 1.2 (Pipeline Dimension)

**Replace binary test (line 156-164) with 3-tier test:**

| Status | Definition | Score | Example |
|--------|------------|-------|---------|
| **ACTIVE DEPENDENCY** | File is READ and APPLIED (execution path) | 30 | Research packages, T1 synthesis |
| **REFERENCE MATERIAL** | File is CITED as example/evidence | 15 | Handoff docs mention it, audit cites it |
| **BIBLIOGRAPHIC** | File is ACKNOWLEDGED in provenance only | 5 | Synthesis credits source |
| **DEAD** | No mentions in POST-CD work | 0 | Scratchpads from complete phases |

**How to distinguish:**
```python
def score_pipeline_3tier(file):
    # Tier 1: Active dependency (imported, required for execution)
    if file in POST_CD_PIPELINE["BUILT_ON"]:
        return 30

    # Tier 2: Reference material (cited as example)
    if file in POST_CD_PIPELINE["CITED_AS_EXAMPLE"]:
        return 15

    # Tier 3: Bibliographic (mentioned in provenance only)
    if file in KNOWLEDGE_ARCHITECTURE_PROVENANCE:
        return 5

    # Dead (no mentions)
    return 0
```

**Impact:** CD-005 drops from 60.9pts (pipeline=30) to 45.9pts (pipeline=15), closer to threshold.

---

### Modification 4: Automated Override Pre-Checks

**Location:** Section X (Execution Workflow), Phase 1 (Quick-Triage)

**Add BEFORE Q1:**
```
PRE-CHECK: AUTOMATED OVERRIDES (before triage)

FOR EACH file:
  # Protection overrides
  IF file.path.contains("perceptual-audit-v2/synthesis/"):
    KEEP (T1 protection) → skip triage

  IF file.name == "CLAUDE.md":
    KEEP (auto-loaded) → skip triage

  # Deletion overrides
  IF file.contains_pattern(r"border-radius:\s*[1-9]"):
    DELETE_IMMEDIATE (soul violation) → skip triage

  IF file.contains_pattern(r"box-shadow|filter:.*drop-shadow"):
    DELETE_IMMEDIATE (soul violation) → skip triage

  # If no override triggered, proceed to triage
```

**Impact:** Soul-dangerous files get -20pts BEFORE dimension scoring (can't be saved by high provenance).

---

### Modification 5: Add Concentration Metric

**Location:** Section III, Step 2 (Secondary Dimensions), add after Temporal

**Add dimension 2.5:**
```
2.5 CONCENTRATION (Score Distribution)

Definition: Measures whether score is FOCUSED (strong in one dimension)
           or DIFFUSE (weak across all dimensions)

Formula:
  max_dimension_score / total_score = concentration_ratio

  - High concentration (0.8+) = focused value (30 pipeline, 5 others)
  - Low concentration (0.3-) = diffuse mediocrity (7 across 5 dims)

Scoring:
  - NOT a separate score dimension
  - Used as TIEBREAKER for files at threshold (35-45pts)

  IF score BETWEEN 35-45:
    IF concentration > 0.8:
      verdict = KEEP (focused value in one critical dimension)
    ELIF concentration < 0.3:
      verdict = DELETE (diffuse mediocrity, no strong signal)
```

**Impact:** Breaks ties for borderline files (40-45pts) based on signal focus.

---

### Modification 6: Post-Deletion Learning Loop

**Location:** Section XIII (Next Steps), add Task #30

**Add Task #30:**
```
POST-DELETION VALIDATION (2 weeks after cleanup)

1. Track deleted file restoration requests
2. Track new work citations of deleted files
3. Identify false negatives (deleted but later needed)
4. Identify false positives (kept but never used)

Metrics to track:
- Restoration rate (% of archived files restored)
- Citation rate (% of kept files cited by new work)
- Dimension miss-attribution (which dimension underweighted?)

Adjust rubric for future runs:
- If restoration rate > 5%: Increase threshold (40 → 45)
- If citation rate < 50%: Decrease threshold (40 → 35)
- If dimension X caused 80% of false negatives: Increase X weight
```

**Impact:** Rubric learns from mistakes, improves over time.

---

### Modification 7: Test Alternative Dimension Weights

**Location:** Section XI (Calibration & Validation), add Alternative Weight Test

**Add test:**
```
ALTERNATIVE WEIGHT CALIBRATION

Test Set: Same 10 known files from calibration-results.md
Weights: Alternative weighting scheme

Scheme A (Pipeline-First):
- Provenance: 25% (down from 35%)
- Pipeline: 40% (up from 30%)
- Soul: 20% (same)
- Temporal: 10% (up from 5%)
- Structural: 0% (eliminate agent-irrelevant)

Scheme B (Provenance-First):
- Provenance: 45% (up from 35%)
- Pipeline: 20% (down from 30%)
- Soul: 20% (same)
- Temporal: 5% (same)
- Structural: 5% (same)

FOR EACH scheme:
  Recalculate all 10 test files
  Compare verdicts to MASTER-VERDICT
  IF accuracy >= 80%:
    Scheme is viable alternative
  ELSE:
    Original weights are uniquely calibrated

IF multiple schemes achieve 80%+ accuracy:
  Rubric is ROBUST (not tuned to specific weights)
ELSE:
  Rubric is FRAGILE (tuned to audit biases)
```

**Impact:** Tests whether rubric weights are NECESSARY or ARBITRARY.

---

## X. THRESHOLD ANALYSIS

### Is 40pts the Right Cutoff?

**Evidence from calibration:**
- Zero files in 40-59pt range (no borderline KEEP test cases)
- Zero files in 20-39pt range (no borderline ARCHIVE test cases)
- One file at 60.9pts (CD-005, barely above HUB threshold)

**This means:**
- Threshold tested on EXTREMES (70+ or 15-)
- No evidence threshold works for BORDERLINE (35-50pts)

**Proposal:** Test threshold on 35-50pt range specifically.

**Generate 10 hypothetical borderline files:**

| File Type | Provenance | Pipeline | Soul | Total | Verdict (40pt threshold) | Human Verdict? |
|-----------|-----------|----------|------|-------|-------------------------|----------------|
| Scratchpad (cited) | 10 | 5 | 0 | 15 | DELETE | DELETE (agrees) |
| Research (partial supersession) | 15 | 5 | 0 + 7 supersession = 27 | ARCHIVE | ARCHIVE (agrees) |
| Exploration (weak quality) | 25 | 5 | 0 | 30 | ARCHIVE | KEEP? (quality ≠ usefulness) |
| Infrastructure (0 refs) | 0 | 30 | 0 | 30 | ARCHIVE | KEEP (implicit value) |
| Decision doc (unique) | 10 | 5 | 0 + 15 supersession + 10 reproducibility = 40 | KEEP | KEEP (unique rationale) |
| Soul enforcement (CLAUDE.md) | 10 | 5 | 15 | 30 | ARCHIVE | KEEP (override) |
| Checkpoint (state tracking) | 15 | 5 | 0 + 10 reproducibility = 30 | ARCHIVE | KEEP (state history) |
| Pattern example (DD-002) | 25 | 5 | 0 + 15 supersession = 45 | KEEP | KEEP (pattern alphabet) |

**Test reveals:**
- Infrastructure files (package.json) score LOW (30pts) but need override protection
- Soul enforcement (CLAUDE.md) scores LOW (30pts) but already has override
- Exploration with weak quality (30pts) might be DELETED by rubric but KEPT by audit (quality ≠ usefulness)

**Threshold should be:**
- **35pts minimum** (to capture unique decision docs at 40pts with buffer)
- **45pts ideal** (to safely KEEP pattern examples, infrastructure)
- **Current 40pts** is borderline acceptable but RISKS false positives (deleting 35-40pt files with latent value)

---

## XI. FINAL RECOMMENDATIONS

### Approve Rubric with Modifications

**Verdict:** Rubric is FUNCTIONAL (100% calibration accuracy on known files) but FRAGILE (untested on unknown files, tuned to audit biases).

**Recommend:**
1. **APPLY Modifications 1-4** (unknown-unknown detector, collection detection, 3-tier pipeline, automated overrides)
2. **TEST Alternative Weights** (Modification 7) before full execution
3. **HUMAN REVIEW 35-50pt range** — zero calibration data here
4. **TRACK Post-Deletion** (Modification 6) to validate rubric accuracy

### High-Risk Areas

**1. Borderline Files (35-50pts):**
- Zero test cases in this range
- Threshold may delete files with latent value
- **Action:** Require human review for all 35-50pt files

**2. Collections (DD, OD, CD):**
- Emergence validator requires MANUAL flagging
- Risk: Executor misses collection → files deleted individually
- **Action:** Automated collection detection (Modification 2)

**3. Buried Crown Jewels (0 refs, unique insights):**
- No detection mechanism
- Risk: Unique decision rationale deleted
- **Action:** Unknown-unknown detector (Modification 1)

**4. Soul-Dangerous with High Provenance:**
- Override Rule 6 requires content scanning
- Risk: Executor skips soul check → dangerous files KEPT
- **Action:** Automated pre-checks (Modification 4)

### Low-Risk Areas

**1. Obvious KEEPs (80+ pts):**
- T1 synthesis, PIPELINE-BACKBONE, POST-CD-PIPELINE
- Multiple validators + overrides protect these
- **Action:** No changes needed

**2. Obvious DELETEs (0-15pts):**
- node_modules, .DS_Store, junk screenshots
- Auto-deletion rules work
- **Action:** No changes needed

**3. Scratchpads Post-Synthesis:**
- Fully superseded, 8.4:1 compression, no forward consumption
- Clear DELETE verdicts
- **Action:** No changes needed

---

## XII. EDGE CASES THE RUBRIC MIGHT MISS

### Case 1: File Valuable for Unknown Future Work

**Example:** _cd-research/ scored KEEP (pipeline=30) because POST-CD-PIPELINE lists it.
**But what if:** POST-CD-PIPELINE changes priorities, stops consuming _cd-research/.
**Rubric at that time:** Pipeline=0 (dead), score drops 30pts → likely DELETE.
**Actual value:** Research may be needed for FUTURE post-CD work (unknown unknowns).

**Rubric has no mechanism for "might be needed later."**

**Proposed:** Add "strategic reserve" dimension for research packages.
- Research (R1-R5, _cd-research) gets +10pts "strategic reserve" bonus
- Rationale: Research has POTENTIAL value even if not currently consumed

---

### Case 2: Implicit Dependencies (package.json, .gitignore)

**Example:** package.json has 0 inbound refs (agents receive explicit paths, no search needed).
**Rubric score:** Provenance=0, Pipeline=0, Soul=0 → 0pts → DELETE.
**Override Rule 3:** Infrastructure protection → KEEP.

**But override requires MANUAL flagging:**
- Must check `if filename IN [package.json, .gitignore, ...]`
- What if new infrastructure file added? (e.g., .prettierrc, tsconfig.json)
- **Risk:** New infrastructure files NOT in override list get deleted

**Proposed:** Automated infrastructure detection:
```python
INFRASTRUCTURE_PATTERNS = [
    r"package\.json",
    r"\.gitignore",
    r"tsconfig\.json",
    r"\.prettierrc",
    r"next\.config\.",
    r"\.env\.",
]

if any(re.match(pattern, file.name) for pattern in INFRASTRUCTURE_PATTERNS):
    return {"verdict": "CRITICAL", "reason": "INFRASTRUCTURE", "score": 100}
```

---

### Case 3: High Refs from WRONG Sources (Epidemic)

**Example:** archive/tokens/spacing.md has 18 refs (all from old card-system/).
**Contains:** `border-radius: 8px` (SOUL VIOLATION).

**Rubric scoring:**
- Provenance: 0 (no threading header)
- Ref Density: 0 (SUPERSEDED sources weighted 0.1×)
- Soul: -20 (dangerous)
- **Total: -20pts → DELETE IMMEDIATELY**

**But what if file HAD threading header?**
- Provenance: 25 (18 refs × 0.1 SUPERSEDED weight = 1.8, rounds to 8-17 bracket after adding some Tier A refs)
- Ref Density: 0
- Soul: -20
- **Total: 5pts → DELETE (correct)**

**Soul dimension SAVES the rubric here (negative score overrides provenance).**

**But what if violation is SUBTLE?**
- `border-radius: 0.5px` (technically >0, but barely)
- Soul validator: Does `r"border-radius:\s*[1-9]"` catch 0.5px? NO (pattern only matches 1-9).
- **Risk:** File passes soul check, gets high provenance, KEPT despite violation.

**Proposed:** Improve soul violation regex:
```python
SOUL_VIOLATIONS = [
    r"border-radius:\s*[0-9]+",  # any number >0 (includes 0.5, 1, 10)
    r"border-radius:\s*\d*\.\d+",  # decimal (0.5px, 1.5px)
    r"box-shadow:\s*(?!none)",  # any box-shadow except none
    r"filter:.*drop-shadow",  # any drop-shadow
]
```

---

### Case 4: Collection Detected But Threshold Disagrees

**Example:** DD explorations (6 files).
**Individual scores:** DD-001=35, DD-002=38, DD-003=42, DD-004=65, DD-005=37, DD-006=70.
**Emergence validator:** Collection integrity = 100% → VETO individual deletion → KEEP ALL.

**But what if collection is PARTIALLY valuable?**
- DD-004 and DD-006 are hubs (65, 70pts) — clearly KEEP
- DD-001, DD-002, DD-005 are borderline (35-38pts) — contested

**Should ALL 6 be kept because 2 are valuable?**

**Rubric says:** YES (emergence veto = DELETE ALL or DELETE NONE).

**But intuition says:** Maybe delete the 3 weak ones, keep the 2 strong ones.

**Counter-argument:** Pattern alphabet REQUIRES all 6 (emergence property).

**Test this:**
- Remove DD-001 (STAGGER pattern)
- Can migration still use DD? YES (5 other patterns remain)
- Is STAGGER pattern UNIQUE to DD-001? NO (same pattern in OD-001)
- **Conclusion:** DD-001 is NOT irreplaceable → emergence veto WRONG

**Proposed:** Refine emergence test:
```
Emergence Test:
1. Remove file from collection
2. Does collection lose MORE than (1/N)×value?
3. Is lost content UNIQUE (not elsewhere)?
4. If YES to both → emergent property exists
5. If NO to either → file is redundant, DELETE safe
```

**Apply to DD-001:**
- Lose 16.7% of collection (1/6)
- Lose STAGGER pattern (unique? NO, also in OD-001)
- **Verdict:** NOT emergent → DELETE safe

**This refines emergence validator to check UNIQUENESS, not just collection membership.**

---

## XIII. SUMMARY OF CHALLENGES

| Challenge | Severity | Fix Complexity | Impact if Unfixed |
|-----------|----------|----------------|-------------------|
| **1. Circular Calibration** | MODERATE | HIGH (need new test set) | Rubric replicates audit biases, not independent |
| **2. Unknown-Unknown Detector** | HIGH | MODERATE (add pre-check) | Buried crown jewels deleted |
| **3. Collection Effect** | HIGH | MODERATE (automated detection) | DD/OD/CD deleted file-by-file |
| **4. Deletion Bias Threshold** | MODERATE | LOW (test 35-50pt range) | Borderline files deleted despite latent value |
| **5. Manual Override Rules** | MODERATE | LOW (automated pre-checks) | Soul-dangerous files KEPT if check missed |
| **6. Aggregation Hides Signals** | LOW | MODERATE (add concentration) | Diffuse mediocrity accumulates points |
| **7. Static Rubric** | LOW | HIGH (build learning loop) | No improvement from post-deletion feedback |

**Overall Risk:** Rubric is SAFE for obvious cases (T1 = KEEP, node_modules = DELETE) but RISKY for borderline cases (35-50pts, collections, unknown-unknowns).

**Recommendation:** Apply Modifications 1-4 (unknown-unknown, collection detection, 3-tier pipeline, automated overrides) BEFORE full execution. Require human review for 35-50pt range.

---

**END OF CHALLENGE**

**Meta-Adversary Verdict:** Rubric is a GOOD FIRST PASS but needs refinement before full execution. The 7 challenges identified are SOLVABLE with modest code changes. Proceed with CAUTION and HUMAN REVIEW for contested cases.
