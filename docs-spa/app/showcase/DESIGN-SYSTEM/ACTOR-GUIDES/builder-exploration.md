# ACTOR GUIDE: Building an Exploration

> **You are about to build an exploration (DD-001, OD-003, etc.).**
> This guide gets you through it. For deep understanding, see README.md.

---

## Your Role: Actor 5 (New Stage Executor)

You are building explorations within a stage. The stage infrastructure exists. You need to execute specific explorations correctly.

**Entry Trigger:** "I'm building OD-003 (Instructional organization). What do I do?"

---

## Quick Start

### Before You Build (20 min)

1. **Open:** `RESEARCH-ACTIVATION-[STAGE].md`
2. **Find:** Your exploration's column
3. **Read:** Every finding marked ✓
4. **Load:** Your density constraint (from EXPLORATION-PROTOCOL)
5. **Verify:** You know all 5 soul pieces

### While You Build

1. **Iterate:** Minimum 5 iterations
2. **Score:** Run `/perceptual-deepening` after iteration 5
3. **Target:** ≥32/40 before marking complete
4. **Verify:** Soul pieces are ACTIVE (not just present) each iteration

### After You Build (45 min)

1. **Create:** `CONSUMPTION-RECEIPT-[STAGE]-[ID].md`
2. **Run:** REFLECTION-PROTOCOL
3. **Document:** Any outbound findings
4. **Update:** RESEARCH-ACTIVE.md status

---

## Pre-Build Checklist

### Research Loading

- [ ] Opened `RESEARCH-ACTIVATION-[STAGE].md`
- [ ] Found my exploration's column
- [ ] Read EVERY finding marked with ✓
- [ ] Understand WHY each finding applies to my exploration
- [ ] Identified research questions to answer through building

### Constraint Loading

- [ ] Know my density constraint (e.g., OD-003 → ISLANDS)
- [ ] Know all 5 soul pieces by heart:
  - #1 Sharp Edges (border-radius: 0)
  - #2 Archivist Serif (Cormorant Garamond for wisdom)
  - #3 2-Zone Callout (family structure)
  - #4 No Shadows (box-shadow: none)
  - #5 Squares Signal System (square indicators)

### Identity Check

- [ ] Can state what question this exploration answers
- [ ] Know what stage produced the findings I'm consuming
- [ ] Know what stage will consume my output

---

## During Build: Per-Iteration Checklist

Run this checklist EVERY iteration:

- [ ] Soul pieces verified (all 5)
- [ ] Density pattern maintained
- [ ] Research questions addressed
- [ ] One change per iteration (isolated variable)
- [ ] Score recorded
- [ ] Discoveries documented

### Iteration Log Template

```markdown
## Iteration [N]

**Change Made:** [single change]
**Score:** [X/40]
**Soul Pieces:**
- #1 Sharp: [PASS/FAIL]
- #2 Serif: [PASS/FAIL]
- #3 2-Zone: [PASS/FAIL]
- #4 Shadows: [PASS/FAIL]
- #5 Squares: [PASS/FAIL]

**Discovery:** [what I learned]
**Next:** [what to change next iteration]
```

---

## Post-Build Checklist

### Quality Gate

- [ ] Score ≥32/40 after minimum 5 iterations
- [ ] Consumption receipt created with real evidence locations
- [ ] Soul pieces ACTIVE in final version (not just present)
- [ ] Reflection protocol completed
- [ ] Outbound findings documented (if any)

### Artifacts Created

| Artifact | Location | Status |
|----------|----------|--------|
| Exploration HTML | `explorations/[stage]/[ID].html` | [ ] |
| Consumption Receipt | `provenance/stage-[N]/CONSUMPTION-RECEIPT-[ID].md` | [ ] |
| Outbound Findings | `provenance/stage-[N]/[STAGE]-outbound-findings.md` | [ ] |
| Research Status Update | `RESEARCH-ACTIVE.md` | [ ] |

---

## If Score Is Stuck

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Score stuck at 28-30 | Soul piece violation | Check which piece is weakest; address directly |
| Score oscillating | Wrong density | Verify density constraint matches exploration |
| Score dropping | Drifted from research | Re-read RESEARCH-ACTIVATION; realign |
| Score plateau at 32 | Need fresh perspective | Deploy sub-agent for external validation |

### Rescue Protocol

If score is stuck after 7+ iterations:

1. **STOP building.** More iterations won't help.
2. **Identify the blocker:**
   - Which soul piece is weakest?
   - Is density constraint correct?
   - Did you consume all ✓ findings?
   - Is content type matched to exploration?
3. **Address specifically:**
   - Soul piece weak → Focus entire iteration on that piece
   - Wrong density → Check EXPLORATION-PROTOCOL pairing
   - Missed findings → Re-read RESEARCH-ACTIVATION
   - Scope mismatch → Adjust scope or consult README.md PART IV
4. **Resume with targeted change.**

---

## Outbound Findings Format

If your exploration discovers something applicable to future stages:

```markdown
## Finding: [STAGE]-F-[NUMBER]

**Statement:** [What you discovered]
**Source:** [STAGE]-[ID] (this exploration)
**Built On:** [comma-separated finding IDs that enabled this]
**Score:** [score when discovered]
**Confidence:** HIGH / MEDIUM / LOW

**Mandatory For:** [future explorations that MUST consume this]
**Recommended For:** [future explorations that SHOULD consume this]

**Chain Impact:** [What breaks if this is ignored]
```

---

## Self-Assessment Questions

Before declaring exploration complete:

1. Did I read EVERY finding marked ✓ in my column?
2. Is my density constraint correct for this exploration?
3. Are soul pieces ACTIVE, not just technically present?
4. Can I answer: "What did this exploration TEACH that wasn't in the research?"
5. Does my consumption receipt have REAL evidence locations?

**If you can't answer YES to all five → Your exploration is incomplete.**

---

## Links

- Research Activation tables: `provenance/stage-[N]/RESEARCH-ACTIVATION-[STAGE].md`
- Exploration protocols: `provenance/stage-[N]/EXPLORATION-PROTOCOL-[STAGE].md`
- Consumption receipt template: README.md PART III Structure 4
- Reflection protocol: README.md PART III Structure 6
- Outbound findings format: README.md PART III Structure 2
- Soul pieces: `provenance/SOUL-DISCOVERIES.md`
