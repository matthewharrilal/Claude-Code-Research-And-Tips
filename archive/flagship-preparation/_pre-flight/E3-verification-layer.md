# E3: Verification Layer -- How to PROVE Each Pre-Flagship Action Was Implemented

**Author:** meta-verifier (Opus 4.6)
**Date:** 2026-02-16
**Purpose:** Design a verification layer with evidence artifacts for every category of pre-flagship work. Trust nothing; verify everything.

**Core problem this solves:** Action items in this project routinely get "done" on paper but not in practice. The ceiling experiment had spatial rules nominally present but never enforced. Enrichments get "applied" but insertions are incomplete or in wrong locations. Prompts get "assembled" but contain MAY rules that should be MUST. This document defines HOW TO PROVE each item was actually done, not just claimed done.

---

## VERIFICATION ARCHITECTURE

```
PRE-FLIGHT VERIFICATION PIPELINE

Phase 1: ENRICHMENT VERIFICATION (automated + cold-read)
   |
   v
Phase 2: SKILL ENRICHMENT VERIFICATION (automated + cold-read)
   |
   v
Phase 3: PROMPT ASSEMBLY VERIFICATION (automated + structural)
   |
   v
Phase 4: GATE IMPLEMENTATION VERIFICATION (executability test)
   |
   v
Phase 5: COMMUNICATION PROTOCOL VERIFICATION (template validation)
   |
   v
Phase 6: CONTENT PREPARATION VERIFICATION (inventory check)
   |
   v
Phase 7: META-VERIFICATION (cold-read agent with VETO POWER)
```

Each phase produces an EVIDENCE ARTIFACT. The meta-verifier (Phase 7) reads all artifacts and issues a GO/NO-GO verdict. NO-GO blocks the flagship experiment from starting.

---

## PHASE 1: DESIGN SYSTEM ENRICHMENT VERIFICATION (7 BLOCKING Gaps)

### Verification Method: Automated Grep + Line Count + Cold-Read Agent

For EACH of the 7 BLOCKING gaps, verification requires THREE independent checks:

1. **PRESENCE CHECK (automated):** Grep for specific unique strings that MUST exist after enrichment
2. **QUANTITY CHECK (automated):** Line count change from known baseline
3. **CORRECTNESS CHECK (cold-read):** Agent reads the enriched section and confirms it would actually trigger the intended behavior

### Gap B1: Maximum Whitespace Prohibition

**Target file:** `design-system/compositional-core/identity/prohibitions.md`

**PRESENCE CHECK -- grep for ALL of these strings (ALL must hit):**
```
grep -c "NEVER Allow a Full Viewport Height of Contentless Space" prohibitions.md  # must return >= 1
grep -c "30% content coverage" prohibitions.md  # must return >= 1
grep -c "2+ consecutive positions below 30%: FAIL" prohibitions.md  # must return >= 1
grep -c "Prohibition #21" prohibitions.md  # must return >= 1 (or "### 21." heading)
grep -c "breathing zone" prohibitions.md  # must return >= 2 (exception + criteria)
```

**QUANTITY CHECK:**
- Baseline: 353 lines (from state-assessor-1 report)
- Expected after enrichment: 353 + ~40 = ~393 lines
- PASS: line count >= 388 (allowing for minor formatting differences)
- FAIL: line count < 388 OR line count = 353 (unchanged)

**CORRECTNESS CHECK (cold-read agent prompt):**
> "Read prohibitions.md. Find Prohibition #21. Answer these questions:
> 1. Does it define a BINARY measurement method (not judgment)?
> 2. Does the measurement method specify scroll positions at viewport-height increments?
> 3. Does it define what counts as 'content' vs 'not content'?
> 4. Is the pass/fail threshold stated as a number (not 'acceptable' or 'reasonable')?
> 5. Does it have exactly ONE documented exception (breathing zone)?
> If all 5 YES: PASS. If any NO: FAIL with explanation."

**EVIDENCE ARTIFACT:** `V1-B1-evidence.md` containing: grep output, line count before/after, cold-read agent's 5 answers.

---

### Gap A1: Transition Grammar Between Zones

**Target file:** `design-system/compositional-core/grammar/mechanism-catalog.md`

**PRESENCE CHECK:**
```
grep -c "Transition Grammar" mechanism-catalog.md  # must return >= 1
grep -c "HARD CUT" mechanism-catalog.md  # must return >= 1
grep -c "SPACING SHIFT" mechanism-catalog.md  # must return >= 1
grep -c "CHECKPOINT" mechanism-catalog.md  # must return >= 2 (type definition + CSS)
grep -c "No transition.*NOT.*valid" mechanism-catalog.md  # must return >= 1 (or "not a valid option")
grep -c "space-max-zone" mechanism-catalog.md  # must return >= 1 (96px cap reference)
```

**QUANTITY CHECK:**
- Baseline: 1,093 lines (from state-assessor-1 report)
- Expected after enrichment: 1,093 + ~80 = ~1,173 lines
- PASS: line count >= 1,163
- FAIL: line count < 1,163 OR unchanged at 1,093

**CORRECTNESS CHECK (cold-read agent prompt):**
> "Read mechanism-catalog.md. Find the 'Transition Grammar' section. Answer:
> 1. Are there exactly 3 transition types defined?
> 2. Does each type have a CSS code block?
> 3. Does each type have a 'When to use' criterion that is mutually exclusive with the others?
> 4. Is there a Selection Rule that reduces transition choice to a single binary question?
> 5. Is 'no transition (just empty space)' explicitly prohibited?
> If all 5 YES: PASS."

**EVIDENCE ARTIFACT:** `V1-A1-evidence.md`

---

### Gap A2: Restraint Principle

**Target file:** `design-system/compositional-core/grammar/mechanism-catalog.md`

**PRESENCE CHECK:**
```
grep -c "Restraint Protocol" mechanism-catalog.md  # must return >= 1
grep -c "4 distinct mechanisms" mechanism-catalog.md  # must return >= 1 (viewport cap)
grep -c "every third of the page" mechanism-catalog.md  # must return >= 1 (distribution)
grep -c "CONSIDERED AND REJECTED" mechanism-catalog.md  # must return >= 1 (restraint ratio)
grep -c "Mechanism Density Cap" mechanism-catalog.md  # must return >= 1
```

**QUANTITY CHECK:**
- After A1: ~1,173 lines
- Expected after A2: ~1,173 + ~50 = ~1,223 lines
- PASS: line count >= 1,213
- Combined check (A1+A2): line count >= 1,213 from 1,093 baseline

**CORRECTNESS CHECK:**
> "Read mechanism-catalog.md. Find 'Restraint Protocol'. Answer:
> 1. Is there a per-viewport maximum (a number, not 'some' or 'few')?
> 2. Is there a per-third-of-page minimum (a number)?
> 3. Is there a rejection documentation requirement with tier-specific counts?
> 4. Is 'operating' defined as VISIBLE, not just CSS-present?
> If all 4 YES: PASS."

**EVIDENCE ARTIFACT:** `V1-A2-evidence.md`

---

### Gap A3: Content Density Minimum Per Zone

**Target file:** `design-system/compositional-core/guidelines/semantic-rules.md`

**PRESENCE CHECK:**
```
grep -c "Content Density Floors" semantic-rules.md  # must return >= 1
grep -c "3+ paragraphs OR 2+ components" semantic-rules.md  # must return >= 1
grep -c "Zone Count Ceiling" semantic-rules.md  # must return >= 1
grep -c "1,500 words" semantic-rules.md  # must return >= 1 (zone count table)
grep -c "Zones exist to SERVE content" semantic-rules.md  # must return >= 1
```

**QUANTITY CHECK:**
- Baseline: 380 lines
- Expected after A3: 380 + ~60 = ~440 lines
- PASS: line count >= 430
- FAIL: line count < 430 OR unchanged at 380

**CORRECTNESS CHECK:**
> "Read semantic-rules.md. Find 'Content Density Floors'. Answer:
> 1. Is there a table with minimum content per zone TYPE (dedicated, breathing, bedrock)?
> 2. Is there a zone count ceiling table indexed by word count?
> 3. Does the rule specify exactly 2 actions when below minimum (MERGE or ADD)?
> 4. Is there a binary test for consecutive empty viewport height?
> If all 4 YES: PASS."

**EVIDENCE ARTIFACT:** `V1-A3-evidence.md`

---

### Gap B3: Front-Loaded Visual Weight Prohibition

**Target file:** `design-system/compositional-core/identity/prohibitions.md`

**PRESENCE CHECK:**
```
grep -c "NEVER Concentrate All Visual Interest" prohibitions.md  # must return >= 1
grep -c "Prohibition #22" prohibitions.md  # must return >= 1 (or "### 22." heading)
grep -c "designed moment" prohibitions.md  # must return >= 2
grep -c "50% scroll depth" prohibitions.md  # must return >= 1
grep -c "3+ simultaneous mechanisms" prohibitions.md  # must return >= 1
```

**QUANTITY CHECK:**
- After B1: ~393 lines
- Expected after B3: ~393 + ~35 = ~428 lines
- Combined check (B1+B3): line count >= 418 from 353 baseline

**CORRECTNESS CHECK:**
> "Read prohibitions.md. Find Prohibition #22. Answer:
> 1. Does it define 'designed moment' with a specific mechanism threshold (not vague)?
> 2. Does it require at least 1 designed moment in the second half of the page?
> 3. Is the measurement a 3-step process that an agent can follow mechanically?
> 4. Is the exception scope narrow (very short pages only)?
> If all 4 YES: PASS."

**EVIDENCE ARTIFACT:** `V1-B3-evidence.md`

---

### Gap C3: Maximum Spacing Token

**Target file:** `design-system/compositional-core/vocabulary/tokens.css`

**PRESENCE CHECK:**
```
grep -c "space-max-section" tokens.css  # must return >= 1
grep -c "space-max-zone" tokens.css  # must return >= 1
grep -c "96px" tokens.css  # must return >= 2 (existing --space-24 + new --space-max-zone)
grep -c "Spacing Maximums" tokens.css  # must return >= 1 (or "spacing maximum" or similar section comment)
grep -c "CHECKPOINT" tokens.css  # must return >= 1 (redirect instruction in comment)
```

**QUANTITY CHECK:**
- Baseline: 174 lines
- Expected after C3: 174 + ~8 = ~182 lines
- PASS: line count >= 180
- FAIL: line count < 180 OR unchanged at 174

**CORRECTNESS CHECK:**
> "Read tokens.css. Find the spacing maximums section. Answer:
> 1. Are there exactly 2 maximum tokens (section-level and zone-level)?
> 2. Does the zone-level maximum equal 96px?
> 3. Is there a comment explaining that exceeding this requires a CHECKPOINT element, not more whitespace?
> 4. Does the comment reference the ceiling experiment evidence?
> If all 4 YES: PASS."

**EVIDENCE ARTIFACT:** `V1-C3-evidence.md`

---

### Gap D3: Content-Form Fit Guidance

**Target file:** `design-system/compositional-core/guidelines/semantic-rules.md`

**PRESENCE CHECK:**
```
grep -c "Content-Form Fit" semantic-rules.md  # must return >= 1
grep -c "Form follows content volume" semantic-rules.md  # must return >= 1
grep -c "Bento grid.*4+ items" semantic-rules.md  # must return >= 1 (or "bento" near "4+")
grep -c "Progressive disclosure.*3+ distinct phases" semantic-rules.md  # must return >= 1
grep -c "simplest form" semantic-rules.md  # must return >= 1
```

**QUANTITY CHECK:**
- After A3: ~440 lines
- Expected after D3: ~440 + ~55 = ~495 lines
- Combined check (A3+D3): line count >= 485 from 380 baseline

**CORRECTNESS CHECK:**
> "Read semantic-rules.md. Find 'Content-Form Fit'. Answer:
> 1. Is there a table mapping form decisions to minimum content requirements?
> 2. Does the table include at least 5 different form types?
> 3. Is there an 'Enough Content?' gate that is explicitly binary (not judgment)?
> 4. Is there a 'simplest form' inverse test?
> 5. Does it include a concrete bad example (1-paragraph section with excessive treatment)?
> If all 5 YES: PASS."

**EVIDENCE ARTIFACT:** `V1-D3-evidence.md`

---

### Summary Statistics Update Verification

**PRESENCE CHECK:**
```
grep -c "Conditional Prohibitions.*1[3-4]" prohibitions.md  # must show 13 or 14 (up from 12)
grep -c "Total.*2[3-4]" prohibitions.md  # must show 23 or 24 (up from 22)
```

**FAIL condition:** If Summary Statistics still show 12 conditional and 22 total, the statistics were not updated even though the prohibitions were added.

---

### Automated Verification Script (Complete)

This script runs ALL presence checks for all 7 gaps. Output: PASS/FAIL per gap with failing grep lines.

```bash
#!/bin/bash
# FLAGSHIP PRE-FLIGHT: Design System Enrichment Verification
# Run from project root: design-system/compositional-core/

PROHIBITIONS="design-system/compositional-core/identity/prohibitions.md"
MECHANISM="design-system/compositional-core/grammar/mechanism-catalog.md"
TOKENS="design-system/compositional-core/vocabulary/tokens.css"
SEMANTIC="design-system/compositional-core/guidelines/semantic-rules.md"

PASS=0
FAIL=0
TOTAL=0

check() {
  local FILE=$1
  local PATTERN=$2
  local GAP=$3
  local DESC=$4
  TOTAL=$((TOTAL + 1))
  COUNT=$(grep -c "$PATTERN" "$FILE" 2>/dev/null || echo "0")
  if [ "$COUNT" -ge 1 ]; then
    echo "  PASS: [$GAP] $DESC (found $COUNT match(es))"
    PASS=$((PASS + 1))
  else
    echo "  FAIL: [$GAP] $DESC (ZERO matches for pattern: $PATTERN)"
    FAIL=$((FAIL + 1))
  fi
}

echo "=== DESIGN SYSTEM ENRICHMENT VERIFICATION ==="
echo ""

echo "--- B1: Maximum Whitespace Prohibition (prohibitions.md) ---"
check "$PROHIBITIONS" "NEVER Allow a Full Viewport Height" "B1" "Prohibition heading present"
check "$PROHIBITIONS" "30% content coverage" "B1" "30% threshold stated"
check "$PROHIBITIONS" "consecutive.*below 30%.*FAIL" "B1" "Binary pass/fail criteria"
check "$PROHIBITIONS" "breathing zone" "B1" "Exception documented"
echo ""

echo "--- A1: Transition Grammar (mechanism-catalog.md) ---"
check "$MECHANISM" "Transition Grammar" "A1" "Section heading present"
check "$MECHANISM" "HARD CUT" "A1" "Hard cut type defined"
check "$MECHANISM" "SPACING SHIFT" "A1" "Spacing shift type defined"
check "$MECHANISM" "CHECKPOINT" "A1" "Checkpoint type defined"
check "$MECHANISM" "space-max-zone" "A1" "96px cap referenced"
echo ""

echo "--- A2: Restraint Principle (mechanism-catalog.md) ---"
check "$MECHANISM" "Restraint Protocol" "A2" "Section heading present"
check "$MECHANISM" "4 distinct mechanisms" "A2" "Viewport density cap"
check "$MECHANISM" "every third of the page" "A2" "Distribution requirement"
check "$MECHANISM" "CONSIDERED AND REJECTED" "A2" "Rejection documentation"
echo ""

echo "--- A3: Content Density Minimum (semantic-rules.md) ---"
check "$SEMANTIC" "Content Density Floors" "A3" "Section heading present"
check "$SEMANTIC" "3+ paragraphs OR 2+ components" "A3" "Minimum content table"
check "$SEMANTIC" "Zone Count Ceiling" "A3" "Zone count ceiling"
check "$SEMANTIC" "Zones exist to SERVE content" "A3" "Boundary principle"
echo ""

echo "--- B3: Front-Loaded Visual Weight (prohibitions.md) ---"
check "$PROHIBITIONS" "NEVER Concentrate All Visual Interest" "B3" "Prohibition heading present"
check "$PROHIBITIONS" "designed moment" "B3" "Designed moment defined"
check "$PROHIBITIONS" "50% scroll depth" "B3" "Second-half requirement"
echo ""

echo "--- C3: Maximum Spacing Token (tokens.css) ---"
check "$TOKENS" "space-max-section" "C3" "Section-level max token"
check "$TOKENS" "space-max-zone" "C3" "Zone-level max token"
check "$TOKENS" "Spacing Maximum" "C3" "Section comment present"
echo ""

echo "--- D3: Content-Form Fit (semantic-rules.md) ---"
check "$SEMANTIC" "Content-Form Fit" "D3" "Section heading present"
check "$SEMANTIC" "Form follows content volume" "D3" "Boundary principle"
check "$SEMANTIC" "simplest form" "D3" "Inverse test present"
echo ""

echo "--- Summary Statistics (prohibitions.md) ---"
# Check that conditional count increased from 12
OLD_CONDITIONAL=$(grep -c "Conditional Prohibitions.*12" "$PROHIBITIONS" 2>/dev/null || echo "0")
if [ "$OLD_CONDITIONAL" -ge 1 ]; then
  echo "  FAIL: [STATS] Summary Statistics still show 12 conditional (should be 13 or 14)"
  FAIL=$((FAIL + 1))
else
  echo "  PASS: [STATS] Summary Statistics updated (no longer shows 12 conditional)"
  PASS=$((PASS + 1))
fi
TOTAL=$((TOTAL + 1))
echo ""

echo "=== LINE COUNT VERIFICATION ==="
echo "prohibitions.md: $(wc -l < "$PROHIBITIONS") lines (baseline: 353, minimum: 418)"
echo "mechanism-catalog.md: $(wc -l < "$MECHANISM") lines (baseline: 1093, minimum: 1213)"
echo "tokens.css: $(wc -l < "$TOKENS") lines (baseline: 174, minimum: 180)"
echo "semantic-rules.md: $(wc -l < "$SEMANTIC") lines (baseline: 380, minimum: 485)"
echo ""

echo "=== AGGREGATE ==="
echo "PASSED: $PASS / $TOTAL"
echo "FAILED: $FAIL / $TOTAL"
if [ "$FAIL" -eq 0 ]; then
  echo "VERDICT: ALL PRESENCE CHECKS PASS"
else
  echo "VERDICT: FAIL -- $FAIL check(s) missing. DO NOT proceed to prompt assembly."
fi
```

---

## PHASE 2: SKILL ENRICHMENT VERIFICATION (3 BLOCKING)

The unified action plan does not explicitly list 3 BLOCKING skill enrichments, but the extraction report (01-extraction-spatial-enrichments.md) identifies these skill-level prerequisites:

### 2.1 PA Skill: Void Guardrails (PRE-10)

**Target file:** `~/.claude/skills/perceptual-auditing/SKILL.md`

**PRESENCE CHECK:**
```
grep -c "void" SKILL.md  # must return >= 3 (guardrail section + related references)
grep -c "1.5 viewport" SKILL.md  # must return >= 1 (max consecutive blank space)
grep -c "60% of total scroll" SKILL.md  # must return >= 1 (minimum content coverage)
grep -c "visual weight distribution" SKILL.md  # must return >= 1
```

**CORRECTNESS CHECK:**
> "Read the perceptual-auditing SKILL.md. Find the void guardrails section. Does it specify:
> 1. A maximum consecutive blank space in viewport units?
> 2. A minimum content coverage percentage?
> 3. A visual weight distribution constraint?
> If all 3 present with specific numbers: PASS."

### 2.2 PA Skill: Spatial Quantification Questions (PRE-04)

**PRESENCE CHECK:**
```
grep -c "PA-50" SKILL.md  # must return >= 1 (empty viewport count)
grep -c "PA-51" SKILL.md  # must return >= 1 (content percentage)
grep -c "PA-52" SKILL.md  # must return >= 1 (designed moment per third)
grep -c "PA-53" SKILL.md  # must return >= 1 (width utilization)
```

**CORRECTNESS CHECK:**
> "Read the PA questions. Are PA-50 through PA-53 present? Does each one:
> 1. Ask for a SPECIFIC MEASUREMENT (not a judgment)?
> 2. Have clearly defined answer categories (ranges or counts)?
> If all 4 questions present with measurements: PASS."

### 2.3 PA Skill: PA-05c Expansion (PRE-06)

**PRESENCE CHECK:**
```
grep -c "Horizontal proportion" SKILL.md  # must return >= 1
grep -c "Vertical proportion" SKILL.md  # must return >= 1
grep -c "Breathing proportion" SKILL.md  # must return >= 1
```

**CORRECTNESS CHECK:**
> "Read PA-05c in the SKILL file. Does PROPORTIONATE now have 3 explicit sub-dimensions?
> 1. Horizontal proportion (container width usage)
> 2. Vertical proportion (visual weight across scroll)
> 3. Breathing proportion (designed vs abandoned negative space)
> All 3 sub-dimensions must pass for PA-05c to pass: stated? PASS/FAIL."

### Skill Verification Evidence

**EVIDENCE ARTIFACT:** `V2-skill-evidence.md` containing grep output for all 3 checks, cold-read agent answers, line count before/after.

**Baseline line count:** 774 lines (from prior enrichment)
**Expected after all skill enrichments:** ~874+ lines
**PASS:** line count >= 850
**FAIL:** line count < 850 OR any presence check fails

---

## PHASE 3: PROMPT ASSEMBLY VERIFICATION

### 3.1 Line Count Verification

**RULE:** Layers 1-3 of the execution prompt must be <= 240 lines total.

**VERIFICATION METHOD:**
```bash
# Count non-blank, non-comment lines in the assembled prompt
# Exclude Layer 4 (Reference Library) which is existing files
grep -v "^$" prompt-layers-1-3.md | grep -v "^#" | wc -l
# Must be <= 240
```

**Builder subset extraction:**
```bash
# Extract the lines the builder actually sees
# Must be <= 55 lines
sed -n '/SECTION 1: MISSION/,/SECTION 8:/p' prompt-layers-1-3.md | wc -l
# Must be <= 55
```

### 3.2 Zero MAY Rules

**VERIFICATION METHOD:**
```bash
# Search for permissive language in the execution spec (Layer 2)
grep -in "\bMAY\b" execution-spec.md
grep -in "\bSHOULD\b" execution-spec.md
grep -in "\bCONSIDER\b" execution-spec.md
grep -in "\bMIGHT\b" execution-spec.md
grep -in "\bCAN\b" execution-spec.md  # "CAN" as capability, not obligation
grep -in "\bCOULD\b" execution-spec.md
# ALL must return zero hits in the execution spec (Layer 2)
```

**EXCEPTION:** "CAN" is acceptable ONLY in Layer 1 (Conviction) where it describes aesthetic aspiration, not agent instruction. "CAN" in Layer 2 (Execution Spec) or Layer 3 (Coordination Spec) is a FAIL.

**EVIDENCE ARTIFACT:** `V3-prompt-evidence.md` with grep output showing zero hits.

### 3.3 Binary Rule Verification

**VERIFICATION METHOD:** For every rule in Layer 2, a cold-read agent answers:

> "For each numbered rule in the execution spec, answer:
> 1. Does the rule have a PASS/FAIL condition (not 'try to' or 'aim for')?
> 2. Could a different agent independently determine PASS or FAIL from the rule text alone?
> 3. Does the rule specify a NUMBER, COMPARISON, or EXISTENCE CHECK (not a subjective quality)?
> If any rule fails all 3 questions: that rule is a judgment rule and MUST be rewritten or moved to Layer 1."

**PASS/FAIL:** Zero judgment rules in Layer 2.

### 3.4 Four-Layer Architecture Verification

**VERIFICATION METHOD:**
```bash
# Check for section markers
grep -c "CONVICTION\|Layer 1\|SECTION 0" prompt.md  # must return >= 1
grep -c "EXECUTION SPEC\|Layer 2\|SECTION 1" prompt.md  # must return >= 1
grep -c "COORDINATION\|Layer 3\|SECTION A" prompt.md  # must return >= 1
grep -c "REFERENCE LIBRARY\|Layer 4" prompt.md  # must return >= 1
```

### 3.5 Attention Cost Calculation

**VERIFICATION METHOD:**

For each rule in the execution spec, classify as BINARY (0.5 units) or JUDGMENT (5 units):
```
ATTENTION COST = (count_binary * 0.5) + (count_judgment * 5)
```

**PASS:** attention cost <= 100
**FAIL:** attention cost > 100

The cold-read agent classifies each rule and computes the sum. If judgment rules exist, they contribute disproportionately to attention cost.

**EVIDENCE ARTIFACT:** `V3-attention-cost.md` with per-rule classification and total.

---

## PHASE 4: GATE IMPLEMENTATION VERIFICATION

### Verification: Each Gate Has 4 Required Properties

For EACH gate in the unified action plan (Gate 0 through Gate 5, plus Kill Criteria KB-01 through FK-05), verify:

| Property | What to Verify | How to Verify |
|----------|---------------|---------------|
| DEFINITION | Gate has a named criterion with a specific threshold | grep for the gate ID and a number/comparison |
| MEASUREMENT METHOD | Gate specifies HOW to check (programmatic, visual, or hybrid) | grep for JavaScript code OR "screenshot" OR "team-lead evaluates" |
| FAIL RESPONSE | Gate specifies what happens on failure (FIX, ABORT, ROLLBACK, DOWNGRADE) | grep for "On failure" OR "FAIL" followed by an action |
| EVIDENCE ARTIFACT | Gate specifies what proof is produced (screenshot, log, file) | grep for output file name OR "screenshot" OR "report" |

**Automated check:**

```bash
# For each gate, verify all 4 properties exist
GATES=("SC-01" "SC-02" "SC-03" "SC-04" "SC-05" "SC-06" "SC-07" "KB-01" "KB-02" "KB-03" "KB-04" "KB-05" "SP-01" "SP-02" "SP-03" "SP-04" "SP-05" "CP-01" "CP-02" "CP-03" "CP-04" "IT-01" "IT-02" "IT-03" "FK-01" "FK-02" "FK-03" "FK-04" "FK-05" "TK-01")

for GATE in "${GATES[@]}"; do
  HAS_THRESHOLD=$(grep -c "$GATE.*[0-9]" unified-action-plan.md 2>/dev/null || echo "0")
  HAS_FAIL=$(grep -c "$GATE.*FAIL\|$GATE.*ABORT\|$GATE.*FIX\|$GATE.*STOP\|$GATE.*ROLLBACK" unified-action-plan.md 2>/dev/null || echo "0")
  if [ "$HAS_THRESHOLD" -eq 0 ] || [ "$HAS_FAIL" -eq 0 ]; then
    echo "INCOMPLETE: $GATE missing threshold or fail response"
  fi
done
```

### Executability Test

For each gate, a cold-read agent answers:

> "I am a team-lead agent who has never seen this pipeline before. For gate [X]:
> 1. Can I determine WHAT to measure from the gate definition alone?
> 2. Can I determine HOW to measure it (tool, command, visual check)?
> 3. Can I determine the THRESHOLD without consulting another document?
> 4. Can I determine WHAT TO DO if it fails without consulting another document?
> If any question is NO: the gate is NOT self-contained and must be expanded."

**PASS:** All gates answer YES to all 4 questions.
**FAIL:** Any gate answers NO to any question.

### Spatial Confidence Gate JavaScript Executability

**VERIFICATION METHOD:** The `runSpatialConfidenceGate()` function must be:
1. Syntactically valid JavaScript (parse without errors)
2. Present in either the prompt or a referenced file path
3. Referenced by the spatial-auditor agent instructions

```bash
# Check syntax validity
node -e "const fs = require('fs'); const code = fs.readFileSync('spatial-gate.js', 'utf8'); new Function(code);" 2>&1
# Must exit 0 (no syntax errors)
```

**EVIDENCE ARTIFACT:** `V4-gate-evidence.md` with per-gate property matrix and executability answers.

---

## PHASE 5: COMMUNICATION PROTOCOL VERIFICATION

### 5.1 Mandatory Checkpoints Are MUST, Not CAN

**VERIFICATION METHOD:**
```bash
# In the execution prompt, search for checkpoint references
# Each checkpoint MUST appear with "MUST" (not "CAN", "MAY", "SHOULD")
for CP in "Checkpoint A" "Checkpoint B" "Checkpoint C" "Checkpoint D" "Checkpoint E"; do
  MUST_COUNT=$(grep -c "$CP.*MUST" prompt.md 2>/dev/null || echo "0")
  MAY_COUNT=$(grep -c "$CP.*MAY\|$CP.*CAN\|$CP.*SHOULD" prompt.md 2>/dev/null || echo "0")
  echo "$CP: MUST=$MUST_COUNT, MAY/CAN/SHOULD=$MAY_COUNT"
  if [ "$MUST_COUNT" -eq 0 ] || [ "$MAY_COUNT" -ge 1 ]; then
    echo "  FAIL: $CP is not mandatory"
  fi
done
```

**PASS:** All 5 checkpoints have >= 1 MUST reference and zero MAY/CAN/SHOULD references.

### 5.2 Message Count Monitoring Assigned

**VERIFICATION METHOD:**
```bash
grep -c "message count" prompt.md  # must return >= 1
grep -c "team-lead.*count\|count.*messages\|tally.*SendMessage" prompt.md  # must return >= 1
```

**CORRECTNESS CHECK:**
> "In the prompt, who is responsible for counting messages? Is it a named agent role (not 'someone should')? Is there a specific count target (not 'some messages')?"

### 5.3 Zero Messages = PAUSE Rule

**VERIFICATION METHOD:**
```bash
grep -c "zero messages.*PAUSE\|zero.*message.*STOP\|no messages.*PAUSE\|0 messages.*PAUSE" prompt.md
# Must return >= 1
```

**CORRECTNESS CHECK:**
> "Does the prompt state that if zero messages are logged at a specific checkpoint, the team-lead MUST pause the pipeline? Is the checkpoint specified (not 'at some point')?"

### 5.4 Message Log Format

**VERIFICATION METHOD:**
The communication protocol (06-communication-protocol.md) defines a message format. Verify this format is referenced in the prompt:

```bash
grep -c "BLOCKING-DEPENDENCY\|QUALITY-GATE\|CLARIFICATION-REQUEST\|ANOMALY-FLAG" prompt.md
# Must return >= 2 (at least 2 of the 4 types referenced)
```

**EVIDENCE ARTIFACT:** `V5-comms-evidence.md` with all grep outputs and correctness check answers.

---

## PHASE 6: CONTENT PREPARATION VERIFICATION

### 6.1 Content Inventory Template

**VERIFICATION METHOD:**
- A content inventory template file must exist (or be embedded in the prompt)
- It must contain fields for: word count per section, content type mix, density map, natural groupings, peak/dip locations

```bash
grep -c "word count\|content type\|density map\|natural grouping\|peak.*dip\|content inventory" prompt.md
# Must return >= 3 (at least 3 of the 5 fields referenced)
```

### 6.2 Content Section Minimums

**VERIFICATION METHOD:**
```bash
grep -c "4.*section\|section.*4\|>= 4.*section" prompt.md  # >= 4 sections required
grep -c "200 words\|>= 200" prompt.md  # >= 200 words each
```

### 6.3 Density Map

**VERIFICATION METHOD:**
> "Does the prompt require a density map to be plotted BEFORE building? Is the density map format specified (table, diagram, or prose)? Does it require identification of peak position?"

### 6.4 Metaphor Pipeline

**VERIFICATION METHOD:**
```bash
grep -c "Phase 1.*Phase 2.*Phase 3\|Phase 1-3\|full.*pipeline.*metaphor\|metaphor.*derivation.*pipeline" prompt.md
# Must return >= 1 (metaphor pipeline reference)
grep -c "Phase 0E\|library.*prohibition\|catalog.*before.*metaphor" prompt.md
# Must return >= 1 (Phase 0E library prohibition)
```

**EVIDENCE ARTIFACT:** `V6-content-evidence.md`

---

## PHASE 7: META-VERIFICATION (Verifying the Verification)

### The Final Cold-Read Agent

**Role:** FINAL-VERIFIER agent with VETO POWER
**Model:** Opus 4.6 (must be Opus for judgment quality)
**Context:** ZERO context about the project. Receives ONLY the evidence artifacts from Phases 1-6.
**Purpose:** Confirm that verification actually happened, not just that evidence artifacts were generated.

### What the Final-Verifier Receives

```
INPUT FILES:
1. V1-B1-evidence.md through V1-D3-evidence.md (7 gap verifications)
2. V2-skill-evidence.md (3 skill enrichments)
3. V3-prompt-evidence.md (prompt assembly checks)
4. V3-attention-cost.md (attention budget calculation)
5. V4-gate-evidence.md (gate implementation checks)
6. V5-comms-evidence.md (communication protocol checks)
7. V6-content-evidence.md (content preparation checks)

ALSO RECEIVES (for independent verification):
8. The actual enriched design system files (prohibitions.md, mechanism-catalog.md, tokens.css, semantic-rules.md)
9. The actual assembled prompt file
10. The actual PA skill file
```

### Final-Verifier Prompt

> "You are the FINAL VERIFIER for a flagship experiment pre-flight. You have VETO POWER -- if you determine that any critical verification is incomplete or fraudulent, the flagship DOES NOT START.
>
> You have received:
> - 7 evidence artifacts from design system enrichment verification
> - 3 evidence artifacts from skill enrichment verification
> - 2 evidence artifacts from prompt assembly verification
> - 1 evidence artifact from gate implementation verification
> - 1 evidence artifact from communication protocol verification
> - 1 evidence artifact from content preparation verification
> - The actual files that were supposedly enriched
>
> For each evidence artifact, answer:
>
> 1. COMPLETENESS: Does the evidence cover ALL items it claims to cover? (Check: are all grep patterns listed? Are all cold-read answers present?)
>
> 2. CONSISTENCY: Does the evidence match the actual files? (Spot-check: pick 2 grep patterns from each artifact and verify them against the actual files yourself. If any discrepancy: VETO.)
>
> 3. CORRECTNESS: Do the cold-read answers demonstrate understanding or just 'yes' without engagement? (If an answer is simply 'yes' with no explanation for WHY: FLAG as potentially rubber-stamped.)
>
> 4. COVERAGE: Are there any BLOCKING items from the unified action plan that have NO evidence artifact? (Cross-reference the 24 pre-build checklist items against the evidence.)
>
> Then issue your verdict:
>
> **GO:** All evidence is complete, consistent, correct, and covers all blocking items. The flagship may proceed.
>
> **NO-GO (FIXABLE):** Evidence is mostly complete but [specific items] need re-verification or enrichment. Fix these items and re-submit evidence to me.
>
> **NO-GO (STRUCTURAL):** Fundamental gaps exist that cannot be fixed by re-verification. [Specific problems] require going back to enrichment/assembly phase.
>
> Write your verdict to: `V7-FINAL-VERDICT.md`"

### Verification Checklist (for the Meta-Verification)

The Final-Verifier checks this checklist:

```
DESIGN SYSTEM (7 items):
[ ] B1: Maximum whitespace prohibition present in prohibitions.md with binary test
[ ] A1: Transition grammar present in mechanism-catalog.md with 3 types + CSS
[ ] A2: Restraint protocol present in mechanism-catalog.md with per-viewport cap
[ ] A3: Content density floors present in semantic-rules.md with zone count ceiling
[ ] B3: Front-loaded visual weight prohibition present with designed moment definition
[ ] C3: Maximum spacing tokens present in tokens.css (--space-max-section, --space-max-zone)
[ ] D3: Content-form fit present in semantic-rules.md with form-to-content table

SKILLS (3 items):
[ ] Void guardrails in PA SKILL.md with specific numbers
[ ] PA-50 through PA-53 present in PA SKILL.md
[ ] PA-05c expanded to 3 sub-dimensions

PROMPT (5 items):
[ ] Layers 1-3 <= 240 lines
[ ] Zero MAY/SHOULD/CONSIDER/MIGHT in Layer 2
[ ] All rules have PASS/FAIL criteria
[ ] 4-layer architecture present
[ ] Attention cost <= 100 units

GATES (3 items):
[ ] All gates have definition + measurement + fail response + evidence artifact
[ ] All gates are self-contained (team-lead can execute without consulting other docs)
[ ] Spatial confidence gate JavaScript is syntactically valid

COMMUNICATION (3 items):
[ ] All 5 checkpoints are MUST (not MAY/CAN)
[ ] Message count monitoring assigned to specific agent
[ ] Zero-messages-at-gate = PAUSE rule is explicit

CONTENT (3 items):
[ ] Content inventory template exists with required fields
[ ] >= 4 sections with >= 200 words each is stated
[ ] Metaphor pipeline Phase 0E prohibition is stated

TOTAL: 24 items. ALL must pass for GO verdict.
```

---

## TIMING AND SEQUENCING

| Phase | Duration | Who Runs It | Blocking? |
|-------|----------|-------------|-----------|
| Phase 1: Enrichment Verification | 15-20 min | Automated script + 1 cold-read Sonnet agent | YES |
| Phase 2: Skill Verification | 10-15 min | Automated grep + 1 cold-read Sonnet agent | YES |
| Phase 3: Prompt Verification | 10-15 min | Automated checks + 1 cold-read Sonnet agent | YES |
| Phase 4: Gate Verification | 15-20 min | 1 cold-read Sonnet agent (executability test) | YES |
| Phase 5: Comms Verification | 5-10 min | Automated grep | YES |
| Phase 6: Content Verification | 5-10 min | Automated grep + team-lead spot-check | YES |
| Phase 7: Meta-Verification | 15-20 min | 1 Opus agent with VETO POWER | YES (FINAL) |
| **Total** | **75-110 min** | **3-4 agents + scripts** | **All phases block** |

**Optimization:** Phases 1-6 can run in PARALLEL (all are independent). Phase 7 runs AFTER Phases 1-6 complete. Optimized total: **30-40 min** (Phases 1-6 parallel) + **15-20 min** (Phase 7) = **45-60 min**.

---

## EVIDENCE ARTIFACT INVENTORY

| Artifact | Content | Produced By |
|----------|---------|-------------|
| `V1-B1-evidence.md` | Grep output, line count, cold-read answers for B1 | Phase 1 |
| `V1-A1-evidence.md` | Grep output, line count, cold-read answers for A1 | Phase 1 |
| `V1-A2-evidence.md` | Grep output, line count, cold-read answers for A2 | Phase 1 |
| `V1-A3-evidence.md` | Grep output, line count, cold-read answers for A3 | Phase 1 |
| `V1-B3-evidence.md` | Grep output, line count, cold-read answers for B3 | Phase 1 |
| `V1-C3-evidence.md` | Grep output, line count, cold-read answers for C3 | Phase 1 |
| `V1-D3-evidence.md` | Grep output, line count, cold-read answers for D3 | Phase 1 |
| `V2-skill-evidence.md` | All 3 skill enrichment verifications | Phase 2 |
| `V3-prompt-evidence.md` | MAY-rule grep, line count, 4-layer check | Phase 3 |
| `V3-attention-cost.md` | Per-rule classification and total attention cost | Phase 3 |
| `V4-gate-evidence.md` | Per-gate 4-property matrix, executability test | Phase 4 |
| `V5-comms-evidence.md` | Checkpoint MUST verification, message count, zero-pause | Phase 5 |
| `V6-content-evidence.md` | Inventory template, section count, density map, pipeline | Phase 6 |
| `V7-FINAL-VERDICT.md` | GO / NO-GO with checklist and spot-check results | Phase 7 |

**Total evidence artifacts:** 14

---

## FAILURE MODES THIS VERIFICATION CATCHES

| Failure Mode | Historical Example | Which Phase Catches It |
|-------------|-------------------|----------------------|
| Enrichment claimed but not inserted | Ceiling experiment: spatial rules nominally present but not in files | Phase 1 (grep finds nothing) |
| Enrichment inserted in wrong location | Wrong section of file, content present but not findable | Phase 1 (cold-read finds but grep misses -> discrepancy) |
| Enrichment inserted but incomplete | Missing binary test, missing exception documentation | Phase 1 (cold-read checks all sub-components) |
| MAY rule survives into execution spec | CP-02 said "MAY communicate" -> zero messages | Phase 3 (grep for MAY/SHOULD/CAN) |
| Gate defined but not executable | Gate says "check spatial quality" without measurement method | Phase 4 (executability test) |
| Communication checkpoints are optional | "Builder CAN send Checkpoint A" | Phase 5 (MUST vs CAN grep) |
| Prompt too long, exceeds attention budget | Ceiling prompt: 1,004 lines, 128 attention units | Phase 3 (line count + attention cost) |
| Verification itself is rubber-stamped | Evidence artifacts say "yes" without actual checking | Phase 7 (meta-verifier spot-checks) |
| Item missing from checklist entirely | Action item in research but not in any verification | Phase 7 (24-item checklist coverage) |
| Statistics not updated after insertions | Prohibition count still shows 22 after adding 2 | Phase 1 (Summary Statistics grep) |

---

## KEY DESIGN DECISIONS

### Why Automated Grep + Cold-Read Agent (Not Just One)

Automated grep catches PRESENCE but not CORRECTNESS. A grep for "Restraint Protocol" will pass even if the section contains placeholder text ("TODO: fill in later"). The cold-read agent catches content quality issues that pattern matching cannot.

Conversely, cold-read agents alone are susceptible to confirmation bias -- they may skim and say "yes" to familiar patterns. Automated grep provides the unfakeable baseline: either the string exists in the file or it doesn't.

The combination is stronger than either alone.

### Why the Final-Verifier Has VETO POWER

Without veto power, verification becomes advisory. Advisory verification was already present in the ceiling experiment (the prompt had rules, the rules were ignored). The only pattern that achieves 100% compliance in this project is BINARY GATES THAT BLOCK PROGRESS. The final-verifier is a binary gate: GO or NO-GO. NO-GO means the flagship does not start. This is the only structure that prevents "we'll fix it during the build" rationalization.

### Why 24 Checklist Items (Not More, Not Fewer)

24 items maps to the 24 pre-build checklist items in the unified action plan. One verification per action item. No items are omitted. No items are added beyond what the unified plan specifies. The verification layer verifies exactly what was planned -- it does not introduce new requirements.

### Why Cold-Read Agents Use Questions, Not "Read and Confirm"

"Read this file and confirm it's correct" produces "Yes, it's correct" 100% of the time. Specific questions ("Does it define a BINARY measurement method?") force the agent to find the specific element or report its absence. Question-based verification is ~3x more reliable than open-ended confirmation (observed in Mode 4 PA: dimension-specific questions caught issues that "is this page good?" did not).

---

**END VERIFICATION LAYER DESIGN**

**Total verification phases:** 7 (6 parallel + 1 final)
**Total evidence artifacts produced:** 14
**Total checklist items:** 24
**Estimated time:** 45-60 min (optimized parallel execution)
**Final authority:** FINAL-VERIFIER with VETO POWER
**Key principle:** Trust nothing. Grep for presence, cold-read for correctness, spot-check for consistency.
