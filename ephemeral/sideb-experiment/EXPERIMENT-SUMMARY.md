# Experiment Execution Summary

**Date:** 2026-03-01T17:40:26.865Z
**Duration:** 6.1 minutes
**Model:** claude-opus-4-6 (all agents)
**Isolation:** --disallowedTools (full tool block)

## Agent Results

| Agent ID | Condition | Files | Output Size | Status |
|----------|-----------|-------|-------------|--------|
| static-1 | static | 0 | 4947 chars | OK |
| static-2 | static | 0 | 4925 chars | OK |
| dynamic-3f-1 | dynamic | 3 | 4581 chars | OK |
| dynamic-3f-2 | dynamic | 3 | 4559 chars | OK |
| hybrid-3f-1 | hybrid | 3 | 5320 chars | OK |
| hybrid-3f-2 | hybrid | 3 | 5179 chars | OK |
| dynamic-6f-1 | dynamic | 6 | 5123 chars | OK |
| dynamic-6f-2 | dynamic | 6 | 5146 chars | OK |
| hybrid-6f-1 | hybrid | 6 | 5262 chars | OK |
| hybrid-6f-2 | hybrid | 6 | 6075 chars | OK |

## Evaluator Results

| Evaluator | Output Size | Status |
|-----------|-------------|--------|
| eval-A | 10228 chars | OK |
| eval-B | 13275 chars | OK |

## Files Generated

- `outputs/BLIND-REVIEW.md` — All 10 analyses with randomized labels (read this FIRST)
- `outputs/_LABEL-KEY.md` — Which label = which condition (read AFTER blind review)
- `outputs/eval-A.md` — First evaluator's blind scores
- `outputs/eval-B.md` — Second evaluator's blind scores (different random order)
- `outputs/<agent-id>.md` — Individual agent outputs
- `outputs/_prompt-<agent-id>.md` — Exact prompts sent to each agent

## Recommended Review Order

1. Read `BLIND-REVIEW.md` — form your own impressions
2. Read `eval-A.md` and `eval-B.md` — see evaluator scores
3. Read `_LABEL-KEY.md` — reveal which condition produced which output
4. Compare your impressions vs evaluator scores vs actual conditions
