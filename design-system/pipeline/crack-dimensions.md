# Pipeline Crack Dimensions — Living Reference

**Purpose:** 14 enumerated ways things silently fail in Pipeline v3+. Check this list before ANY pipeline modification.
**Source:** Crack analysis research (2026-02-25), 5 Opus research agents, 9 reports.
**Update policy:** When a new crack dimension is discovered, add it here. When a defense is implemented, update the Defense column.

---

## Quick Reference Table

| # | Dimension | Mechanism | Defense | Status |
|---|-----------|-----------|---------|--------|
| 1 | Template Slot Absence | Recipe step exists, template has no slot | BV-05 keyword scan | CLOSED (v4) |
| 2 | Compression Loss at Junctions | Information present in input, lost during compression | BV-05 compression ratio + keyword scan | PARTIALLY CLOSED |
| 3 | Voluntary Non-Execution | Spec says do X, agent skips it | GR-48 as verdict precondition (B-01) | CLOSED (v4) |
| 4 | Execution-Recording Divergence | Claimed state != real state | Source field on gates (B-03) + reduced tracker (D-01) | CLOSED (v4) |
| 5 | Position Effect / Attention Decay | Late items get less attention | Recipe format + file ceilings (<800 builder, <1200 orchestrator) | MITIGATED |
| 6 | Cross-File Reference Rot | References go stale when files split/rename | Auxiliary Prompt Gate 1 (reference integrity scan) | PARTIALLY CLOSED |
| 7 | Defense Paradox | More tracking = more things to miss | Tracker reduced 298->50 fields; 20:1 meta-output cap | MITIGATED |
| 8 | Spec Ambiguity / Soft Language | "Target" and "aim for" permit non-compliance | Auxiliary Prompt Audit D (soft language scan); BV-03 verb ratio | CLOSED (v4) |
| 9 | Environmental / Platform Variance | DPR, viewport, font rendering differences | GR-61 + DPR correction before gates (B-07) | CLOSED (v4) |
| 10 | Orchestrator Opacity | Orchestrator is player + referee, no audit | 5 binary self-assessment questions (NEW-03) | PARTIALLY CLOSED |
| 11 | Mode / Context Sensitivity | Rules for one mode fail in another | GR-33/34 mode detection (promote to REQUIRED after B-01) | MITIGATED |
| 12 | Downstream Propagation Failure | Info reaches intermediate stage, not final | GR-55 multi-coherence + GR-46/66 component count | PARTIALLY CLOSED |
| 13 | Feedback Loop Absence | Feed-forward pipeline, no structured root-cause feedback | REFINE cycle + cross-run FIX-TRACKER (NEW-02) | MITIGATED |
| 14 | Complexity-Induced Invisibility | Too many items to audit, gaps become invisible | Tracker reduction + GR-48 automatic + file ceilings | MITIGATED |

---

## Compound Interactions (Top 5)

1. **D1 + D2 + D5:** Template slot absence + compression + attention decay = hover behavior lost through ALL THREE stages
2. **D3 + D7 + D14:** Non-execution + defense paradox + invisibility = GR-48 meta-failure
3. **D4 + D10:** Recording divergence + orchestrator opacity = hand-constructed results go undetected
4. **D5 + D11 + D12:** Position + mode sensitivity + propagation = edge zone under-execution
5. **D6 + D14:** Reference rot + invisibility = GR-50 ID collision goes unnoticed

---

## When to Check This Document

- Before adding ANY new pipeline artifact or section
- Before splitting or merging ANY pipeline file
- Before adding ANY new gate
- During retrospective analysis
- When designing new defenses (verify they do not trigger D7)

---

## Change Protocol

When modifying pipeline artifacts, verify your change does not RE-OPEN a CLOSED dimension.
Use the Auxiliary Prompt (`design-system/pipeline/AUXILIARY-PROMPT.md`) as the verification procedure.

---

## Status Key

| Status | Meaning |
|--------|---------|
| CLOSED (v4) | Defense is code-enforced or structurally eliminated in Pipeline v4 |
| PARTIALLY CLOSED | Defense exists but covers <100% of attack surface |
| MITIGATED | Reduces probability but does not eliminate the crack |
