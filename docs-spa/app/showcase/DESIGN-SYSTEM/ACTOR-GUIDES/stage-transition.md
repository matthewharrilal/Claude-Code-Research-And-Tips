# ACTOR GUIDE: Building the Next Stage

> **You have completed Stage N. Now you must set up Stage N+1.**
> This guide gives you the complete checklist. For deep understanding, see README.md.

---

## Your Role: Actor 1 (Stage Transition Builder)

You have completed a stage (e.g., OD). You must now BUILD the execution infrastructure for the next stage (e.g., AD). You are the bridge between stages — you don't just hand off, you CREATE the conditions for the next stage to succeed.

**Entry Trigger:** "OD is done. Now I need to set up AD so it can execute correctly."

---

## What You're Creating

| Artifact | Purpose | Template Location |
|----------|---------|-------------------|
| HANDOFF-[N]-TO-[N+1].md | Mandatory consumption list | README Part III Structure 7 |
| RESEARCH-ACTIVATION-[N+1].md | Finding→exploration mapping | README Part III Structure 1 |
| EXPLORATION-PROTOCOL-[N+1].md | How to execute explorations | README Part III Structure 3 |
| CONSUMPTION-RECEIPT templates | Proof of consumption | README Part III Structure 4 |
| IDENTITY SIGNATURE | Stage identity | README Part III Structure 7 |

---

## Stage Transition Checklist

### Phase 1: Complete Current Stage (Before Moving On)

**GATE: Do Not Proceed Until All Items Checked**

- [ ] All explorations score ≥32/40
- [ ] All CONSUMPTION-RECEIPTS created for current stage
- [ ] All REFLECTION-PROTOCOLS run for each exploration
- [ ] All outbound findings documented with:
  - `source:` field
  - `built_on:` field
  - `chain_impact:` field
- [ ] All unanswered questions forwarded to QUESTIONS section
- [ ] IDENTITY SIGNATURE updated for current stage
- [ ] PIPELINE-MANIFEST.md updated with all findings

### Phase 2: Create Infrastructure for Next Stage

- [ ] Create `provenance/stage-[N+1]-[name]/` directory
- [ ] Create `CLAUDE.md` in new directory
- [ ] Create HANDOFF-[N]-TO-[N+1].md listing:
  - MANDATORY findings (must consume)
  - RECOMMENDED findings (should consume)
  - FORBIDDEN patterns (must not violate)
- [ ] Create RESEARCH-ACTIVATION-[N+1].md:
  - Columns for each planned exploration
  - Rows for each prior finding
  - ✓ marks where finding applies to exploration
- [ ] Create EXPLORATION-PROTOCOL-[N+1].md skeleton:
  - Density pairings for each exploration
  - Soul piece verification steps
  - Sub-agent deployment points
- [ ] Template CONSUMPTION-RECEIPT-[N+1]-001.md
- [ ] Add IDENTITY SIGNATURE template to stage CLAUDE.md

### Phase 3: Update Pipeline

- [ ] Update PIPELINE-MANIFEST with Stage N+1
- [ ] Update RESEARCH-ACTIVE.md status
- [ ] Run all 4 verification tests (below)

---

## Verification Tests

Run ALL four tests before declaring transition complete:

### Test A: Backward Traversal

**Question:** From any Stage N finding, can you trace to theory?

```
[Stage N Finding]
    → source: [exploration-id]
    → built_on: [prior finding IDs]
    → [prior findings trace to research]
    → [research traces to theory]
```

**Pass:** Complete chain exists
**Fail:** Add missing provenance fields

### Test B: Forward Traversal

**Question:** From Stage N+2 perspective, can you find Stage N+1 consumption requirements?

**Pass:** HANDOFF, RESEARCH-ACTIVATION, EXPLORATION-PROTOCOL all exist and are complete
**Fail:** Create missing documents

### Test C: Identity Verification

**Question:** Does Stage N CLAUDE.md correctly state what it constrains?

**Required fields:**
- I Am
- I Carry Forward
- I Produced
- I Constrain
- If I Didn't Exist
- My Strongest
- My Weakest

**Pass:** All 7 fields present and accurate
**Fail:** Complete IDENTITY SIGNATURE

### Test D: Receipt Verification

**Question:** Do Stage N consumption receipts have real evidence locations?

**Pass:** Evidence locations point to real content
**Fail:** Fix evidence locations

---

## What Breaks If You Skip This

| Skipped Item | Consequence | When It Hurts |
|--------------|-------------|---------------|
| HANDOFF document | Next stage guesses what's mandatory | AD ignores OD-F-007, builds incompatible geometry |
| RESEARCH-ACTIVATION | Next stage doesn't know which findings apply to which exploration | AD wastes time on irrelevant findings |
| EXPLORATION-PROTOCOL | Next stage's process is inconsistent | Scores vary wildly between explorations |
| Consumption receipts | Next stage can't verify what was consumed | AD audits OD, can't trust claims |
| Questions forwarded | Same questions re-discovered | AD spends time on questions OD identified |
| Outbound findings | Cross-domain insights lost | CD doesn't know about density insight from OD |
| Identity signature | Stage is container, not actor | Nobody knows what DD constrains |
| Sub-agent deployment points | Next stage does untargeted external research | Random external findings, no chain integration |

---

## HANDOFF Document Format

```markdown
# HANDOFF: [STAGE-N] → [STAGE-N+1]

## 📥 MANDATORY CONSUMPTION

These findings MUST be consumed before any [N+1] exploration:

| Finding ID | Summary | Applies To | Why Mandatory |
|------------|---------|------------|---------------|
| [N]-F-### | [summary] | ALL / specific | [consequence if ignored] |

## 📋 RECOMMENDED CONSUMPTION

These findings SHOULD be consumed:

| Finding ID | Summary | Most Relevant For | Why Recommended |
|------------|---------|-------------------|-----------------|
| [N]-F-### | [summary] | [exploration] | [value add] |

## 🚫 FORBIDDEN PATTERNS

Do NOT do these things:

| Anti-Pattern | Why Forbidden | Consequence |
|--------------|--------------|-------------|
| [pattern] | [violates what] | [what breaks] |

## ❓ FORWARDED QUESTIONS

Questions Stage [N] couldn't answer:

| Question | Origin | Why [N] Couldn't Answer | [N+1] Must Explore In |
|----------|--------|------------------------|----------------------|
| [question] | [finding] | [limitation] | [exploration] |

## 🪪 INHERITANCE

What Stage [N+1] inherits from me:
- All soul pieces (non-negotiable)
- Quality bar: [average score] minimum
- [Stage-specific constraints]
```

---

## Self-Assessment Questions

Before declaring transition complete:

1. Can Stage N+1 executor find my MANDATORY findings in <30 seconds?
2. Do my outbound findings have `source:`, `built_on:`, `chain_impact:` fields?
3. Did I forward the questions I couldn't answer?
4. Does PIPELINE-MANIFEST show Stage N+1?
5. Can I trace from my findings backward to Information Foraging Theory (or equivalent foundation)?

**If you can't answer YES to all five → Your transition is incomplete.**

---

## The Self-Replicating Property

When you complete this checklist correctly, you're not just finishing your stage. You're setting up the next stage to succeed.

**The replication loop:**
1. You consumed structures from prior stage
2. You built explorations using those structures
3. You created new structures (receipts, findings, handoffs)
4. Next stage consumes YOUR structures
5. Next stage repeats the cycle

**The 7 structures are self-replicating.** Each stage that uses them correctly produces the inputs the next stage needs. Each stage that skips them breaks replication.

---

## Links

- Structure templates: README.md PART III
- Stage transition details: README.md PART II "Starting a New Stage"
- Verification tests: README.md PART IX
- Pipeline manifest: `provenance/PIPELINE-MANIFEST.md`
- Existing handoffs: `provenance/stage-2-density-dd/HANDOFF-DD-TO-OD.md`
