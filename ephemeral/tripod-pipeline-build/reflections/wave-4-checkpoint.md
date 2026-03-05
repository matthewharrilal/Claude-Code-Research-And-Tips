# Wave 4 Checkpoint — Red Team Fixes Applied

## Summary
- **Wave:** 4 (Fix Pass)
- **Input:** 55 findings from Wave 3 (7 BLOCKING, 11 SIGNIFICANT, 17 MEDIUM, 16 LOW)
- **Applied:** 7/7 BLOCKING, 11/11 SIGNIFICANT
- **Files modified:** 7 (SKILL-assembled.md, TRIPOD-PIPELINE-SPECIFICATION.md, synthesizer-prompt.md, builder-pass-1-prompt.md, builder-pass-3-prompt.md, weaver-prompt.md, pa-auditor-prompt.md)

## BLOCKING Fixes (7/7 Applied)

| ID | Fix | File(s) |
|----|-----|---------|
| C4 | Added `_build-final.html` to Weaver input list | SKILL Step 4C |
| C19 | Changed all prompt references from "read and include" to "pass path, agent reads via Read tool" | SKILL (10 references) |
| R01 | Added CONTEXT RECOVERY section at top of SKILL; all agents receive file paths, not contents | SKILL |
| R02 | HTTP server uses lsof-primary cleanup; added server verification step | SKILL Step 3E, 4A |
| R03 | Inlined full server start/stop in Phase 5 REFINE | SKILL Step 5E |
| R04 | Added COST WARNING with user confirmation before first fix cycle | SKILL Phase 5 |
| Q01 | Added structural uniqueness spot-check in synthesizer validation | SKILL Step 2D |

## SIGNIFICANT Fixes (11/11 Applied)

| ID | Fix | File(s) |
|----|-----|---------|
| C2 | Spec Section 12 updated from "Maximum 3" to "Maximum 2 fix cycles" | TRIPOD-PIPELINE-SPECIFICATION.md |
| C3 | Step 4D: comparison report = EXTRACT from synthesis.md Output 4 (copy, not composition) | SKILL Step 4D |
| C7 | builder-pass-3 reflection: "Weaver reads it" → "refine builder reads it" | builder-pass-3-prompt.md |
| C12 | Refine builder inputs reordered: synthesis.md FIRST, HTML LAST; gap statements extracted | SKILL Step 5C |
| Q02 | Zone architecture overview added to Section 1 of _package-pass-1.md (synthesizer instruction) | synthesizer-prompt.md |
| Q03 | 80% creative authority → "creative authority on HOW, not WHETHER" | builder-pass-1-prompt.md |
| Q10 | Novelty markers: [NOVEL]/[STANDARD] tags on mechanisms + findings; Weaver tracks separately | synthesizer-prompt.md, weaver-prompt.md, SKILL Step 4D |
| R05 | Agent spawn retry protocol (1 retry, 30s wait) | SKILL |
| R06 | Synthesizer exemplars reduced from 2 (cd-001 + cd-006) to 1 (cd-006 only) | synthesizer-prompt.md |
| R07 | Blank screenshot recovery protocol (file-size check + retry + stop) | SKILL Step 3E |
| R09 | Browser pre-flight check (verify Playwright browser installed) | SKILL Phase 0 |
| R10 | 3+ specialist failure stop condition | SKILL Step 2B |

## MEDIUM Fixes NOT Applied (Deferred)

These were assessed and intentionally deferred:

| ID | Reason Deferred |
|----|----------------|
| C5 | Specialist file naming convention — cosmetic, no runtime impact |
| C6 | PA question injection format — works as-is with orchestrator interpolation |
| C8 | Synthesizer dedup format — prompt already instructs merger |
| C10 | Section 9 rotation position — addressed by Q02 zone overview fix |
| C11 | Package line budget constraint — ranges are guidance, not hard gates |
| C13 | Content.md not in Pass 2 inputs — builder has it from Pass 1 context |
| R11 | Path quoting — shell quoting is standard practice, not a prompt fix |
| R12 | Screenshot naming convention — works as-is |
| R13 | Gate runner timeout — Playwright MCP handles its own timeouts |
| Q04-Q09 | Quality MEDIUMs — addressed indirectly by Q01/Q02/Q03/Q10 fixes |

## Final State

| Metric | Value |
|--------|-------|
| SKILL-assembled.md | 842 lines |
| Prompt files (13) | 3,428 lines |
| Grand total | 4,270 lines |
| Remaining placeholders | 0 |
| Remaining RETHINK markers | 0 |
| Stale path references | 0 |
| "Maximum 3 fix cycles" in active files | 0 |

## Next Step
Wave 5: Final Review — spawn a final Opus reviewer to validate the complete assembled skill after all fixes.
