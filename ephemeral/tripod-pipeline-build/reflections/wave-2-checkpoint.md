# Wave 2 Checkpoint — Assembly Complete

## Summary
- **Wave:** 2 (Assembly)
- **Approach:** Reference-based assembly (prompt files stored alongside SKILL.md, not inlined)
- **Assembler agent:** Lost during context compaction — team lead performed assembly directly
- **Reviewer-5 late fixes:** 3 additional BLOCKING issues fixed during assembly

## Deliverables

### SKILL-assembled.md (817 lines)
- All 13 `{{PLACEHOLDER}}` markers replaced with file path references
- Points to 13 prompt files in `~/.claude/skills/research-compose/prompts/`
- All 6 phases (0-5) intact with validation gates between each
- Context recovery instructions at every phase boundary
- Output manifest with complete file tree

### New Prompt Files Created (3)
| File | Lines | Purpose |
|------|-------|---------|
| tc-derivation.md | 59 | TC agent — run tension-composition pipeline on content |
| pa-auditor-prompt.md | 87 | PA auditor — fresh-eyes perceptual experience report |
| weaver-prompt.md | 158 | Weaver — synthesize auditor reports + package compliance |

### Complete Prompt File Inventory (13 files, 3,413 lines)
| File | Lines |
|------|-------|
| synthesizer-prompt.md | 643 |
| specialist-4-prompt.md | 365 |
| builder-pass-3-prompt.md | 334 |
| builder-pass-2-prompt.md | 304 |
| builder-pass-1-prompt.md | 302 |
| specialist-2-prompt.md | 299 |
| specialist-3-prompt.md | 268 |
| specialist-5-prompt.md | 224 |
| specialist-1-prompt.md | 216 |
| weaver-prompt.md | 158 |
| refine-builder-prompt.md | 154 |
| pa-auditor-prompt.md | 87 |
| tc-derivation.md | 59 |

## Reviewer-5 Late Fixes Applied

These 3 BLOCKING issues arrived after the Wave 1b fix pass and were addressed during assembly:

| # | Issue | Fix Applied |
|---|-------|-------------|
| R5-1 | Agent count wrong (14-15) | Corrected to 16-17 with detailed breakdown |
| R5-2 | $50 cost pause threshold missing | Added to Prerequisites section |
| R5-3 | HTTP server cleanup on failure | Added PID tracking, pre-cleanup of port 8080, kill instructions on failure |

## Verification Results

| Check | Result |
|-------|--------|
| Remaining `{{` placeholders | 0 (PASS) |
| All phases present (0-5) | PASS |
| All 13 prompt files exist | PASS |
| `RETHINK` occurrences | 0 (PASS) |
| `design-system/archive/` paths | 0 (PASS) |
| Agent count | 16-17 (PASS) |
| Cost pause threshold | Present (PASS) |
| HTTP cleanup | PID tracked + cleanup (PASS) |
| Max 2 fix cycles | Confirmed (PASS) |
| REBUILD terminology | Consistent (PASS) |

## Design Decision: Reference-Based Assembly

**Decision:** Keep prompts as separate files rather than inlining 3,413 lines into the SKILL.

**Rationale:**
- SKILL stays at 817 lines (readable in one context window)
- Prompt files can be updated independently without touching the orchestrator
- The orchestrator reads prompt files at runtime via `Read` tool
- Matches the established pattern from `/compose` skill

**Trade-off:** The orchestrator must read each prompt file before spawning agents, adding Read tool calls. But since these files are small (59-643 lines) and the orchestrator already reads many files during setup, the overhead is minimal.

## Assembly Structure

```
~/.claude/skills/research-compose/
├── SKILL.md ................. 817 lines (the orchestrator)
└── prompts/
    ├── tc-derivation.md ..... 59 lines
    ├── specialist-1-prompt.md . 216 lines
    ├── specialist-2-prompt.md . 299 lines
    ├── specialist-3-prompt.md . 268 lines
    ├── specialist-4-prompt.md . 365 lines
    ├── specialist-5-prompt.md . 224 lines
    ├── synthesizer-prompt.md .. 643 lines
    ├── builder-pass-1-prompt.md 302 lines
    ├── builder-pass-2-prompt.md 304 lines
    ├── builder-pass-3-prompt.md 334 lines
    ├── pa-auditor-prompt.md ... 87 lines
    ├── weaver-prompt.md ....... 158 lines
    └── refine-builder-prompt.md 154 lines
```

## Support Files (NOT installed to skill directory)
- `assembly/pa-integration-spec.md` (383 lines) — PA + Weaver protocol reference
- `assembly/instrumentation-spec.md` (316 lines) — 3-layer instrumentation reference

These specs are embedded into the relevant prompt files. They don't need to be shipped separately.

## Next Step
Wave 3: Red Team — 3 adversarial Opus agents attempt to break the assembled skill by identifying edge cases, failure modes, and internal contradictions.
