# ACTOR GUIDE: Auditing Exploration Compliance

> **You are verifying whether work meets the quality bar.**
> This guide gives you the checklist. For deep understanding, see README.md.

---

## Your Role: Actor 4 (Auditor)

You are checking whether work was done correctly. You might be auditing your own work or someone else's.

**Entry Trigger:** "OD-003 claims to be complete. Does it meet the quality bar?"

---

## Audit Checklist

### 1. Consumption Receipt Verification

- [ ] `CONSUMPTION-RECEIPT-[STAGE]-[ID].md` exists
- [ ] Evidence locations point to real files
- [ ] Findings consumed match RESEARCH-ACTIVATION requirements
- [ ] `source:` and `built_on:` fields are populated

### 2. Soul Piece Verification

For EACH soul piece, verify it is **ACTIVE** (not just present):

| Soul Piece | Check For | ACTIVE Means |
|------------|-----------|--------------|
| #1 Sharp Edges | `border-radius: 0` everywhere | Sharpness COMMUNICATES precision |
| #2 Archivist Serif | Cormorant Garamond for wisdom | Serif CONVEYS authority |
| #3 2-Zone Callouts | See exploration HTML | Zones CREATE family structure |
| #4 No Shadows | `box-shadow: none` | Flatness SIGNALS honesty |
| #5 Squares | Square indicators | Squares MARK system-level |

**The Squint Test:** Step back from the screen. Does it FEEL like KortAI? Sharp, precise, authoritative? If it feels soft, rounded, or uncertain — soul pieces may be present but not active.

### 3. Score Verification

- [ ] Score ≥32/40
- [ ] Score from `/perceptual-deepening` (not self-assessed)
- [ ] At least 5 iterations completed
- [ ] Score comparable to DD baseline (34.5/40 average)

### 4. Chain Integrity — Backward Traversal

Pick any finding from the exploration. Can you trace it back to theory?

```
[Exploration finding]
    → [Stage finding (e.g., OD-F-007)]
        → [Prior stage finding (e.g., DD-F-006)]
            → [Research document (e.g., R3-041)]
                → [Theory (e.g., Information Foraging Theory)]
```

- [ ] Backward traversal reaches theory
- [ ] Each link has `source:` and `built_on:` fields
- [ ] No dead ends (findings without provenance)

### 5. Chain Integrity — Forward Traversal

From next stage's perspective, can they find what to consume?

- [ ] `HANDOFF-[STAGE]-TO-[NEXT].md` lists this exploration's findings
- [ ] `RESEARCH-ACTIVATION-[NEXT].md` includes relevant findings
- [ ] Findings have MANDATORY vs RECOMMENDED status marked
- [ ] Unanswered questions forwarded to QUESTIONS section

---

## Common Violations

| Violation | How to Detect | Remediation |
|-----------|---------------|-------------|
| Evidence locations fake | File doesn't exist or content doesn't match | Re-create receipt with real evidence |
| Soul pieces present but not active | Squint test fails; feels "off" | Re-iterate until soul pieces COMMUNICATE |
| Score inflated | Compare to DD average (34.5) | Re-score with calibrated expectations |
| Backward traversal dead-ends | No `source:` field on finding | Add provenance fields retroactively |
| Forward docs missing | HANDOFF not created | Create HANDOFF before marking complete |
| Research not consumed | RESEARCH-ACTIVATION column not checked | Verify all ✓ items were read |

---

## The Four Verification Tests

Run ALL four tests before marking any exploration as verified:

### Test A: Backward Traversal Works

**Test:** Pick any finding (e.g., DD-F-006). Can you trace to origin?
**Pass Criteria:** Complete path exists from finding to cited theory
**Fail Action:** Add missing `source:`, `built_on:`, DERIVATION CHAIN, or CONSUMPTION-RECEIPT

### Test B: Forward Traversal Works

**Test:** Pick any upcoming exploration (e.g., OD-003). Can you find what to consume?
**Pass Criteria:** All 4 documents exist and are complete
**Fail Action:** Create missing activation table, questions section, protocol, or handoff

### Test C: Identity Exists

**Test:** Pick any stage folder. Does its CLAUDE.md have identity?
**Pass Criteria:** All 7 identity fields present (I Am, I Carry, I Produced, I Constrain, If I Didn't Exist, My Strongest, My Weakest)
**Fail Action:** Add IDENTITY SIGNATURE section

### Test D: Receipts Prove Consumption

**Test:** Pick any completed exploration. Does it have a receipt?
**Pass Criteria:** Complete receipt with evidence locations
**Fail Action:** Create consumption receipt with full format

---

## Audit Report Template

After auditing, document your findings:

```markdown
## Audit Report: [EXPLORATION-ID]

**Auditor:** [name/ID]
**Date:** [date]
**Overall Result:** PASS / FAIL

### Checklist Results

| Check | Result | Notes |
|-------|--------|-------|
| Consumption Receipt | PASS/FAIL | [details] |
| Soul Pieces Active | PASS/FAIL | [details] |
| Score ≥32/40 | PASS/FAIL | Actual: [score] |
| Backward Traversal | PASS/FAIL | [details] |
| Forward Traversal | PASS/FAIL | [details] |

### Violations Found

| Violation | Severity | Remediation Required |
|-----------|----------|---------------------|
| [violation] | HIGH/MEDIUM/LOW | [what to fix] |

### Recommendation

[ ] Approved for completion
[ ] Requires remediation (see above)
[ ] Requires re-audit after fixes
```

---

## Self-Assessment Questions

Before declaring audit complete:

1. Did I check ACTUAL evidence locations (not just that the file exists)?
2. Did I verify soul pieces are ACTIVE, not just technically present?
3. Did I trace backward far enough (to theory, not just prior finding)?
4. Did I check forward documents exist for next stage?
5. Would this exploration teach someone HOW to think, not just WHAT to apply?

---

## Links

- Verification tests: README.md PART IX
- Structure formats: README.md PART III
- Quality bar source: DD average score (34.5/40)
- Soul pieces: `provenance/SOUL-DISCOVERIES.md`
- Pipeline manifest: `provenance/PIPELINE-MANIFEST.md`
