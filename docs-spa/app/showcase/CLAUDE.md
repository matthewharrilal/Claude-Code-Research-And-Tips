# CLAUDE.md — Project Instructions
## Persistent Rules for KortAI Design System Development

───────────────────────────────────────────────────────────────────────────────
THIS FILE IS READ AT THE START OF EVERY SESSION
───────────────────────────────────────────────────────────────────────────────

These instructions are ALWAYS active. They don't need to be prompted.
Violation of these instructions means the work is INVALID.

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
MANDATORY RESEARCH GROUNDING — BEFORE ANY ACTION
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

**BEFORE building, creating, or generating ANYTHING, you MUST:**

### STEP 1: Load Research Context

```
READ these files (not from memory — actually read them):

1. showcase/checkpoints/RESEARCH-ACTIVE.md
   → What findings exist? What's been applied? What's unapplied?

2. showcase/research/RESEARCH-SYNTHESIS.md
   → What are the cross-research insights?

3. DESIGN-SYSTEM/patterns/density-patterns.md
   → What patterns are validated? What confidence levels?

4. DESIGN-SYSTEM/anti-patterns/registry.md
   → What must be avoided?

5. showcase/checkpoints/DISCOVERIES-LOG.md
   → What has been learned from explorations?
```

### STEP 2: Identify Applicable Research

```
For the task at hand, identify:
- Which R-X findings are DIRECTLY applicable?
- Which validated explorations (DD-XXX, OD-XXX, etc.) are relevant?
- Which anti-patterns could occur?
- What prior learnings apply?

WRITE THIS DOWN before proceeding.
```

### STEP 3: Commit to Specific Applications

```
STATE explicitly:
- "I will apply R3-[ID] by doing [specific action]"
- "I will reference DD-[XXX] for [specific aspect]"
- "I will avoid [anti-pattern] by [specific approach]"

DO NOT proceed without this commitment.
```

### STEP 4: Build with Research Visible

```
As you build, annotate your work:
- When applying a finding: "Applying R3-012: [what]"
- When referencing exploration: "Referencing DD-002: [what]"
- When avoiding anti-pattern: "Avoiding [anti-pattern]: [how]"
```

### STEP 5: Verify Application

```
After building, verify:
- Did I actually apply the findings I committed to?
- Can I point to specific lines/elements where each was applied?
- Did any research get forgotten?
```

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
MANDATORY REFINEMENT LOOP — DURING ANY CREATION
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

**Every piece of work goes through this refinement loop:**

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         THE REFINEMENT LOOP                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. GROUND IN RESEARCH                                                      │
│     └── Read applicable R-X findings                                        │
│     └── Read validated explorations                                         │
│     └── Read anti-patterns                                                  │
│     └── State what you'll apply                                             │
│                                                                             │
│  2. BUILD DRAFT                                                             │
│     └── Create with research in mind                                        │
│     └── Annotate research applications                                      │
│                                                                             │
│  3. VERIFY AGAINST RESEARCH                                                 │
│     └── For each finding identified: Did I apply it?                        │
│     └── For each anti-pattern: Did I avoid it?                              │
│     └── What research could I have applied but didn't?                      │
│                                                                             │
│  4. VERIFY AGAINST SOUL                                                     │
│     └── Read DESIGN-SYSTEM/tokens/* fresh                                   │
│     └── Check: border-radius: 0?                                            │
│     └── Check: box-shadow: none?                                            │
│     └── Check: colors correct?                                              │
│     └── Check: typography correct?                                          │
│     └── Invoke Perceptual Depth Audit sub-agents                            │
│                                                                             │
│  5. IDENTIFY GAPS                                                           │
│     └── What research wasn't applied?                                       │
│     └── What soul violations exist?                                         │
│     └── What could be improved?                                             │
│                                                                             │
│  6. REFINE                                                                  │
│     └── Address gaps                                                        │
│     └── Apply missed research                                               │
│     └── Fix soul violations                                                 │
│                                                                             │
│  7. RE-VERIFY (Return to step 3)                                            │
│     └── Repeat until:                                                       │
│         - All identified research is applied                                │
│         - No soul violations remain                                         │
│         - No gaps identified                                                │
│                                                                             │
│  8. DOCUMENT                                                                │
│     └── Log what research was applied                                       │
│     └── Log what was learned                                                │
│     └── Update RESEARCH-ACTIVE.md                                           │
│     └── Update DISCOVERIES-LOG.md                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

**This loop is NOT optional. It happens EVERY time.**

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
MANDATORY OUTPUT FORMAT — RESEARCH CITATIONS
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

**Every output (exploration, section, component) MUST include:**

```markdown
## RESEARCH APPLICATION RECORD

### Research Identified as Applicable
| Finding ID | Description | Planned Application |
|------------|-------------|---------------------|
| R3-012 | [finding] | [how I'll apply it] |
| R5-007 | [finding] | [how I'll apply it] |

### Research Actually Applied
| Finding ID | Where Applied | Evidence |
|------------|---------------|----------|
| R3-012 | [line/element] | [specific proof] |
| R5-007 | [line/element] | [specific proof] |

### Research Identified But NOT Applied
| Finding ID | Why Not Applied | Future Action |
|------------|-----------------|---------------|
| R4-003 | [reason] | [what to do about it] |

### Anti-Patterns Checked
| Anti-Pattern | Avoided? | How |
|--------------|----------|-----|
| [pattern] | YES/NO | [specific approach] |

### Validated Explorations Referenced
| Exploration | What I Took From It |
|-------------|---------------------|
| DD-002 | [specific element or approach] |

### Soul Verification
- border-radius: 0 everywhere? [YES/NO]
- box-shadow: none everywhere? [YES/NO]
- Colors correct? [YES/NO]
- Typography correct? [YES/NO]
- Spacing correct? [YES/NO]

### Perceptual Depth Audit Results
[Brief summary of 7 sub-agent findings]

### Refinement Iterations
- Iteration 1: [what was refined, why]
- Iteration 2: [what was refined, why]
- Final: [what changed from initial]
```

**If this record is missing or incomplete, the work is INVALID.**

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
MANDATORY FILES TO READ BEFORE EACH TASK TYPE
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

### Before ANY Exploration (DD-XXX, OD-XXX, AD-XXX, CD-XXX):

```
MUST READ:
□ showcase/research/RESEARCH-SYNTHESIS.md (full)
□ showcase/research/R[relevant]-*.md (the relevant research stream)
□ showcase/checkpoints/RESEARCH-ACTIVE.md (what's applied, what's not)
□ showcase/checkpoints/DISCOVERIES-LOG.md (prior learnings)
□ DESIGN-SYSTEM/patterns/*.md (validated patterns)
□ DESIGN-SYSTEM/anti-patterns/registry.md (what to avoid)
□ DESIGN-SYSTEM/tokens/* (locked values)

MUST EXTRACT:
□ List of findings to apply (with IDs)
□ List of anti-patterns to avoid
□ List of validated explorations to reference
□ Specific techniques from prior learnings
```

### Before ANY Section Build (Phase 3):

```
MUST READ:
□ All research files (R1-R5)
□ RESEARCH-SYNTHESIS.md
□ All INCLUDE explorations for relevant category
□ DISCOVERIES-LOG.md lessons learned
□ RESEARCH-ACTIVE.md for unapplied findings

MUST EXTRACT:
□ Complete list of applicable findings
□ Which INCLUDE explorations demonstrate what I need
□ Specific anti-patterns for this content type
```

### Before ANY Migration:

```
MUST READ:
□ DESIGN-SYSTEM/* (complete package)
□ All validated explorations
□ All anti-patterns
□ knowledge-architecture/KA-DECISIONS.md

MUST EXTRACT:
□ Exact token values to apply
□ Pattern to use (with validation reference)
□ Compliance checklist
```

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
MANDATORY RESEARCH-ACTIVE.md UPDATE
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

**After EVERY piece of work, update showcase/checkpoints/RESEARCH-ACTIVE.md:**

```markdown
### [Date] — [Task Completed]

**Research Applied:**
| Finding ID | Applied In | How |
|------------|------------|-----|
| [ID] | [output] | [specific application] |

**Research Still Unapplied:**
| Finding ID | Why Not This Time | When To Apply |
|------------|-------------------|---------------|
| [ID] | [reason] | [future task] |

**New Learnings to Add to Research:**
| Learning | Should Be Added To | Priority |
|----------|-------------------|----------|
| [learning] | [R-X or new file] | [HIGH/MED/LOW] |
```

**This update is MANDATORY. Without it, research application is not tracked.**

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
PERCEPTUAL DEPTH AUDIT — ALWAYS INVOKE FULLY
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

**The Perceptual Depth Audit Skill Package is ALWAYS invoked at these points:**

1. **After building any visual output** — Full 7 sub-agent audit
2. **After any iteration** — At least abbreviated audit
3. **Before marking anything complete** — Full verification audit
4. **When comparing to validated explorations** — Comparative audit

**Invoking the skill package means:**

```
1. READ the skill package documentation (not from memory)
2. EXTRACT the full methodology
3. APPLY every layer:
   - Soul extraction
   - Sub-agent deployment (A through G, full definitions)
   - Squint test
   - KortAI comparison
   - Scoring rubric
4. DOCUMENT the audit results
5. REFINE based on findings
6. RE-AUDIT until passing
```

**Abbreviated audit is NOT acceptable for:**
- Final versions of explorations
- Section builds
- Anything going into DESIGN-SYSTEM/

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
RESEARCH FINDING COUNTS (ACTUAL)
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

The actual finding counts (as of 2026-02-04):

| Research | Actual Count | Status |
|----------|--------------|--------|
| R-1 | 28 findings | COMPLETE |
| R-2 | 27 findings | COMPLETE |
| R-3 | 51 findings | COMPLETE |
| R-4 | 192 findings | COMPLETE |
| R-5 | 39 findings | COMPLETE |
| **TOTAL** | **337 findings** | |

This is the actual number of findings to track, not 124.

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
WHAT HAPPENS IF THESE RULES ARE VIOLATED
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

**If any mandatory step is skipped:**

1. The output is INVALID
2. It cannot be added to DESIGN-SYSTEM/
3. It cannot be marked as INCLUDE
4. It cannot inform migration
5. It must be REDONE with proper process

**Signs of violation:**

- "Research Application Record" is missing or empty
- Cannot point to specific lines where research was applied
- RESEARCH-ACTIVE.md not updated
- Perceptual Depth Audit not documented
- "I applied the research" without evidence

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
SELF-CHECK QUESTIONS — ASK BEFORE EVERY OUTPUT
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

Before outputting anything, ask yourself:

```
□ Did I READ the research files (not recall from memory)?
□ Did I IDENTIFY specific findings to apply (with IDs)?
□ Did I COMMIT to specific applications before building?
□ Did I ANNOTATE where research was applied?
□ Did I VERIFY application after building?
□ Did I invoke the FULL Perceptual Depth Audit?
□ Did I REFINE based on gaps found?
□ Did I UPDATE RESEARCH-ACTIVE.md?
□ Is my Research Application Record COMPLETE?
□ Can I PROVE each research application with specific evidence?
```

**If ANY answer is NO → Stop. Complete the step. Then proceed.**

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
COMPACTION SURVIVAL — THESE RULES PERSIST
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

**When context is compacted:**

1. READ this CLAUDE.md file FIRST
2. These rules are STILL ACTIVE
3. Resume with mandatory research grounding
4. Do not skip steps just because context is fresh

**The refinement loop is not session-dependent. It is ALWAYS active.**

═══════════════════════════════════════════════════════════════════════════════
█████████████████████████████████████████████████████████████████████████████
KEY FILE LOCATIONS
█████████████████████████████████████████████████████████████████████████████
═══════════════════════════════════════════════════════════════════════════════

**Research Files:**
- showcase/research/R1-DOCUMENTATION-PATTERNS.md
- showcase/research/R2-CREATIVE-LAYOUTS.md
- showcase/research/R3-DENSITY-DIMENSIONS.md
- showcase/research/R4-AXIS-INNOVATIONS.md
- showcase/research/R5-COMBINATION-THEORY.md
- showcase/research/RESEARCH-SYNTHESIS.md

**Tracking Files:**
- showcase/checkpoints/RESEARCH-ACTIVE.md (central tracking)
- showcase/checkpoints/MASTER-STATE.md (position)
- showcase/checkpoints/DISCOVERIES-LOG.md (learnings)
- showcase/checkpoints/RESEARCH-APPLICATION-ENFORCEMENT-TEMPLATE.md

**Design System:**
- DESIGN-SYSTEM/README.md
- DESIGN-SYSTEM/tokens/*
- DESIGN-SYSTEM/patterns/*
- DESIGN-SYSTEM/anti-patterns/registry.md

**Knowledge Architecture:**
- knowledge-architecture/KA-DECISIONS.md
- knowledge-architecture/SOURCE-OF-TRUTH-REGISTRY.md

═══════════════════════════════════════════════════════════════════════════════
