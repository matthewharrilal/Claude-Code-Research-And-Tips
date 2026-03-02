# Wave 3 Checkpoint — Red Team Complete

## Summary
- **Wave:** 3 (Red Team)
- **Agents:** 3 Opus adversarial agents, each with a different attack angle
- **Total findings:** 55 (7 BLOCKING, 11 SIGNIFICANT, 17 MEDIUM, 16 LOW + 4 verified consistent)

## Per-Agent Results

### Red Team Consistency (23 findings)
- 2 BLOCKING, 2 SIGNIFICANT, 5 MEDIUM, 10 LOW, 4 verified consistent
- Key findings: Weaver missing HTML source (C4), prompt paths don't exist at install location (C19)

### Red Team Runtime (21 findings)
- 4 BLOCKING, 6 SIGNIFICANT, 7 MEDIUM, 4 LOW
- Key findings: Context overflow (R01), HTTP PID lost between bash calls (R02), server not restarted in REFINE (R03), fix cycle cost explosion (R04)

### Red Team Quality (11 findings)
- 1 BLOCKING, 3 SIGNIFICANT, 5 MEDIUM, 2 LOW
- Key findings: Generic packages gameable (Q01), zone architect blind to zone recipe (Q02), 80% creative authority escape valve (Q03)

## BLOCKING Findings Master List

| ID | Title | Fix Approach |
|----|-------|-------------|
| C4 | Weaver missing HTML source | Add `_build-final.html` to SKILL Step 4C Weaver input list |
| C19 | Prompt paths reference install location | Document install requirement + add relative path note |
| R01 | Orchestrator context overflow | Reduce reads: pass paths not contents, use bash validation |
| R02 | HTTP PID lost between bash calls | Use lsof-primary cleanup, drop PID variable |
| R03 | HTTP server not restarted in REFINE | Inline server start in Phase 5 Step 5D |
| R04 | Fix cycle cost explosion | Update cost estimates, warn before REFINE cycles |
| Q01 | Generic packages gameable | Add structural uniqueness spot-check to synthesizer validation |

## SIGNIFICANT Findings Master List

| ID | Title | Fix Approach |
|----|-------|-------------|
| C2 | Max fix cycles: spec says 3, SKILL says 2 | Update spec to 2 (SKILL is canonical) |
| C3 | Comparison report identity — 3 definitions | Align to extraction/copy, not orchestrator composition |
| R05 | Agent spawn failure — no retry | Add 1-retry protocol |
| R06 | Synthesizer context overload | Reduce to 1 exemplar, use file paths |
| R07 | Blank screenshots — no recovery | Add file-size check + retry + recovery protocol |
| R08 | Port 8080 already in use | Verify server start, add port fallback |
| R09 | Playwright browser not installed | Add pre-flight check in Phase 0 |
| R10 | Specialist re-run — no escalation for multiple failures | Add 3+ failure stop condition |
| Q02 | Zone architect blind to zone recipe (rotation flaw) | Move zone architecture summary to pass-1 package |
| Q03 | 80% creative authority escape valve | Reframe: creative interpretation yes, selective omission flagged |
| Q10 | Comparison report false confidence from generic packages | Add "novelty marker" concept to synthesizer |

## Next Step
Wave 4: Apply fixes to SKILL-assembled.md + prompt files. All BLOCKING + SIGNIFICANT fixes applied. Selected MEDIUM fixes applied based on impact.
