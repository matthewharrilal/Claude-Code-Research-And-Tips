# AUXILIARY INSTRUCTION — FOR THE EXECUTING CLAUDE INSTANCE

═══════════════════════════════════════════════════════════════════════════════
**READ THIS FIRST. THEN READ THE MASTER PROMPT. THEN PLAN. THEN EXECUTE.**
═══════════════════════════════════════════════════════════════════════════════

## WHAT YOU ARE

You are a Claude instance tasked with PLANNING and EXECUTING a full-pipeline perceptual auditing run across a design system. You have been given a master execution prompt that contains everything you need. Your job is to:

1. Read the master execution prompt **completely** — every line, every section, every appendix
2. Create a **comprehensive plan** that accounts for every detail in the prompt
3. Execute that plan using **TeamCreate agent teams** (not just subagents)
4. Verify your execution against the prompt at every stage

## THE MASTER EXECUTION PROMPT

**File:** `docs-spa/app/showcase/explorations/axis/_perceptual-research/MASTER-PERCEPTUAL-EXECUTION-PROMPT.md`

**Size:** ~1,704 lines across 9 sections + 5 appendices

**You MUST read this file in its ENTIRETY before creating any plan.**

---

═══════════════════════════════════════════════════════════════════════════════
## PHASE 1: ABSORPTION (Do this BEFORE planning)
═══════════════════════════════════════════════════════════════════════════════

### Step 1: Full Read

Read the master execution prompt from line 1 to the final line. Do NOT skim. Do NOT summarize as you go. Absorb the full document.

If the file is too long to read in one pass, read it in sequential chunks (lines 1-500, 501-1000, 1001-1500, 1500+). But you MUST read every line.

### Step 2: Section Inventory

After reading, write down every section and subsection you found. Your inventory MUST include AT MINIMUM:

```
SECTION 1: MISSION STATEMENT
  - The One Rule
  - The Sovereignty Principle
  - The Cascade Requirement
  - The Three Laws of Perceptual Questions

SECTION 2: PIPELINE OVERVIEW
  - Stage descriptions (DD, OD, AD, CD, Components)
  - File locations per stage
  - Dependency chain
  - Exploration file inventory (18 HTML files)

SECTION 3: THE PERCEPTUAL AUDITING SKILL
  - 28 Questions (Tier 1: Mandatory Five, Tier 2: Standard Fifteen, Tier 3: Deep Dive Eight)
  - 4 Modes (Embedded, Quick, Standard, Standalone)
  - Cold Look Protocol
  - Scroll-Through Protocol
  - Visual Auditing Protocol (Playwright steps)
  - Research Sovereignty (Lock Sheet, Temporal Firewall, classification decision tree)
  - Dual Severity Track (Rule Track + Perception Track)
  - Anti-Patterns (23 total across 7 categories)

SECTION 4: TEAM ARCHITECTURE
  - Agent roles with CAN/CANNOT lists
  - Standard configuration (4 agents)
  - Standalone configuration (7 agents)
  - Task graphs with dependencies
  - Communication protocol
  - Information isolation barriers
  - Agent lifecycle management
  - Gate verification
  - Error handling
  - ALL prompt templates (count them — there should be 7+)

SECTION 5: ENRICHMENT PROTOCOL
  - PA-F finding ID format (PA-F-### with 5 suffixes)
  - Registry entry template
  - 7 enrichment layers
  - 8-step execution sequence
  - Verification checklist

SECTION 6: CASCADE PROPAGATION
  - 5-layer dependency chain (L1-L5)
  - 7 root cause classes (S/T/P/C/R/I/F)
  - Classification decision tree
  - 6-phase propagation protocol
  - Cross-stage impact matrix
  - 7-condition unanimity guarantee

SECTION 7: EXECUTION SEQUENCE
  - Stage-by-stage mode selection
  - Full-pipeline sequence
  - Abbreviated option
  - Research context per stage
  - Stage-specific auditor focus annotations
  - HTTP server setup
  - Timeline estimates

SECTION 8: VALIDATION CRITERIA
  - Bento Grid Litmus Test
  - Ongoing metrics (count them)
  - Red flags
  - Calibration examples (good vs bad)

SECTION 9: FILE MANIFEST
  - Input files
  - Output files per audit/stage/cross-stage
  - Directory conventions
  - Naming conventions

APPENDIX A: Scroll-through adaptations by stage
APPENDIX B: Pre-flight checklist
APPENDIX C: Retroactive cascade checklists
APPENDIX D: The severity system that killed perception
APPENDIX E: Escalation protocol format
```

**If your inventory is MISSING any of the above, go back and re-read the section you missed.**

### Step 3: Extract Counts

Before planning, extract and verify these specific counts from the master prompt:

| Item | Expected Count | Your Count |
|------|---------------|------------|
| Perceptual questions (total) | 28 | ? |
| Tier 1 (Mandatory Five) | 5 | ? |
| Tier 2 (Standard Fifteen) | 15 | ? |
| Tier 3 (Deep Dive Eight) | 8 | ? |
| Modes | 4 | ? |
| Anti-patterns | 23 | ? |
| Anti-pattern categories | 7 | ? |
| Root cause classes | 7 | ? |
| Enrichment layers | 7 | ? |
| Enrichment execution steps | 8 | ? |
| Unanimity guarantee conditions | 7 | ? |
| Agent prompt templates | 7+ | ? |
| Cascade propagation phases | 6 | ? |
| Dependency chain layers | 5 | ? |
| Stages to audit | 4-5 | ? |
| HTML exploration files | 18 | ? |
| Appendices | 5 | ? |

**If ANY count doesn't match, re-read that section. The master prompt is the source of truth.**

---

═══════════════════════════════════════════════════════════════════════════════
## PHASE 2: PLANNING (Do this AFTER full absorption)
═══════════════════════════════════════════════════════════════════════════════

### Planning Rules

1. **Every section of the master prompt MUST map to at least one plan step.** If a section has no corresponding plan step, your plan is incomplete.

2. **Every numbered list in the master prompt MUST be reflected in your plan.** If the prompt says "8-step execution sequence," your plan must account for all 8 steps.

3. **Every template in the master prompt MUST appear in your plan.** If there are prompt templates for agent roles, your plan must show when and how each template is used.

4. **Every decision tree in the master prompt MUST be referenced.** The cascade classification tree, the Lock Sheet classification tree — your plan must show where these are applied.

5. **Your plan MUST use TeamCreate.** Not subagents via Task tool. Actual teams using TeamCreate with named agents, task lists, and message passing. The master prompt specifies TeamCreate configurations — use them exactly.

### Plan Structure

Your plan MUST include:

#### A. Pre-Flight Phase
- [ ] HTTP server startup
- [ ] File existence verification (all input files)
- [ ] Output directory creation
- [ ] Pre-flight checklist from Appendix B

#### B. Per-Stage Audit Phase (for EACH stage: DD, OD, AD, Components)
For each stage, your plan must show:
- [ ] Which MODE to use (from Section 7)
- [ ] Which RESEARCH CONTEXT to load (from Section 7)
- [ ] The LOCK SHEET for this stage (from Section 4 / Section 3)
- [ ] The TEAM CONFIGURATION (from Section 4) — exact agent names, roles, task graph
- [ ] The EXECUTION FLOW — waves, gates, verification
- [ ] The SCROLL-THROUGH adaptations for this stage (from Appendix A)
- [ ] The STAGE-SPECIFIC auditor focus annotations (from Section 7)
- [ ] Which PROMPT TEMPLATES to use for each agent (from Section 4)
- [ ] How FINDINGS are classified (from Section 6 — root cause taxonomy)
- [ ] How ENRICHMENT happens (from Section 5 — all 7 layers)
- [ ] How CASCADE is evaluated (from Section 6 — decision tree)

#### C. Cross-Stage Coordination Phase
- [ ] How findings from stage N feed into stage N+1
- [ ] Cross-stage cascade propagation
- [ ] Unanimity verification across all stages

#### D. Enrichment Execution Phase
- [ ] PA-F finding registry creation
- [ ] Per-layer enrichment execution (all 7 layers)
- [ ] Enrichment verification checklist

#### E. Validation Phase
- [ ] Bento Grid Litmus Test
- [ ] All ongoing metrics checked
- [ ] Red flag scan
- [ ] Calibration verification

### Cross-Reference Matrix

After creating your plan, build this cross-reference matrix:

```
| Master Prompt Section | Plan Step(s) | Covered? |
|----------------------|-------------|----------|
| 1. Mission Statement | [step #s] | YES/NO |
| 2. Pipeline Overview | [step #s] | YES/NO |
| 3. Skill (Questions) | [step #s] | YES/NO |
| 3. Skill (Modes) | [step #s] | YES/NO |
| 3. Skill (Cold Look) | [step #s] | YES/NO |
| 3. Skill (Scroll-Through) | [step #s] | YES/NO |
| 3. Skill (Visual Protocol) | [step #s] | YES/NO |
| 3. Skill (Sovereignty) | [step #s] | YES/NO |
| 3. Skill (Anti-Patterns) | [step #s] | YES/NO |
| 3. Skill (Severity Track) | [step #s] | YES/NO |
| 4. Team Architecture | [step #s] | YES/NO |
| 4. Prompt Templates | [step #s] | YES/NO |
| 4. Information Isolation | [step #s] | YES/NO |
| 4. Error Handling | [step #s] | YES/NO |
| 5. Enrichment Protocol | [step #s] | YES/NO |
| 5. PA-F ID Format | [step #s] | YES/NO |
| 5. Enrichment Templates | [step #s] | YES/NO |
| 6. Cascade Propagation | [step #s] | YES/NO |
| 6. Root Cause Classes | [step #s] | YES/NO |
| 6. Unanimity Guarantee | [step #s] | YES/NO |
| 7. Execution Sequence | [step #s] | YES/NO |
| 7. HTTP Server Setup | [step #s] | YES/NO |
| 7. Timeline Estimates | [step #s] | YES/NO |
| 8. Validation Criteria | [step #s] | YES/NO |
| 8. Bento Grid Test | [step #s] | YES/NO |
| 9. File Manifest | [step #s] | YES/NO |
| Appendix A (Scroll) | [step #s] | YES/NO |
| Appendix B (Pre-flight) | [step #s] | YES/NO |
| Appendix C (Cascade) | [step #s] | YES/NO |
| Appendix D (Severity) | [step #s] | YES/NO |
| Appendix E (Escalation) | [step #s] | YES/NO |
```

**If ANY row says NO, your plan is INCOMPLETE. Go back and add the missing step.**

---

═══════════════════════════════════════════════════════════════════════════════
## PHASE 3: EXECUTION
═══════════════════════════════════════════════════════════════════════════════

### Execution Rules

1. **Follow your plan step by step.** Do not skip steps. Do not reorder unless a dependency requires it.

2. **Use TeamCreate for every audit team.** The master prompt specifies team configurations — use them. Each stage gets its own team.

3. **Every agent you spawn MUST have the correct prompt template** from the master prompt. Do not paraphrase or abbreviate the templates — use the exact wording from the prompt templates section.

4. **Information isolation is NON-NEGOTIABLE.** Visual auditors NEVER see the Lock Sheet before completing Cold Look. The Temporal Firewall is not optional.

5. **Scroll-through is MANDATORY** for Standard and Standalone modes. Quick mode is viewport-only.

6. **Every finding gets a PA-F ID immediately.** No findings without IDs. No duplicate IDs.

7. **Every finding gets root-cause classified.** Use the 7-class taxonomy (S/T/P/C/R/I/F) and the decision tree from Section 6.

8. **Enrichment happens for EVERY finding.** Not just critical ones. Every PA-F entry flows through the 7 enrichment layers per the 8-step execution sequence.

9. **Cascade evaluation happens for EVERY non-Surface finding.** Use the cascade decision tree. If root cause is T/P/C/R/I/F, trace to source and fix there.

10. **The Bento Grid Litmus Test is your calibration.** If your audit process would NOT catch a 130px crushed column where every word stacks on its own line — your process is broken. Verify this early.

### Per-Team Execution Checklist

For EACH team you create, verify:

```
□ TeamCreate called with correct team name format
□ Tasks created with correct descriptions
□ Task dependencies (blockedBy) set correctly
□ Agents spawned with EXACT prompt templates from master prompt
□ HTTP server running before any Playwright agents spawn
□ Research Contextualizer agent spawned FIRST (if applicable)
□ Visual auditors spawned WITHOUT Lock Sheet access
□ Temporal Firewall maintained (auditors complete before Lock Sheet shared)
□ Cold Look responses LOCKED before any spec reading
□ Scroll-through protocol executed (not just full-page screenshots)
□ All 28 questions asked (or appropriate subset per mode)
□ Findings assigned PA-F IDs immediately
□ Root cause classification applied to every finding
□ Dual severity track applied (Rule Track + Perception Track)
□ Anti-patterns monitored (all 23)
□ Enrichment executed for every finding (all 7 layers)
□ Cascade evaluated for every non-Surface finding
□ Weaver/Synthesizer produces cross-reference report
□ Team shut down cleanly after completion
□ TeamDelete called after all agents terminated
```

---

═══════════════════════════════════════════════════════════════════════════════
## PHASE 4: VERIFICATION
═══════════════════════════════════════════════════════════════════════════════

After ALL stages are audited, verify:

### Completeness Check

```
□ Every stage audited (DD: 6 files, OD: 6 files, AD: 6 files, Components)
□ Every HTML exploration file received scroll-through audit
□ Every finding has a PA-F ID
□ Every finding has root-cause classification
□ Every finding has dual severity (Rule + Perception)
□ Every finding flowed through enrichment (all 7 layers)
□ Every non-Surface finding evaluated for cascade
□ Cross-stage coordination completed
□ Unanimity guarantee checked (all 7 conditions)
□ PA-outbound-findings.md created/updated
□ PIPELINE-MANIFEST.md updated
□ RESEARCH-ACTIVE.md updated
□ Accumulated identity delta documented
```

### Cross-Reference Verification

Re-read the master execution prompt one more time. For each section, verify:
- Did your execution address this section?
- Did you miss any subsection, template, or requirement?
- Are there any details you skimmed past during planning that weren't executed?

### Final Deliverables

Your execution MUST produce:
1. Per-stage audit reports (one per stage)
2. PA-F finding registry (PA-outbound-findings.md)
3. Enrichment records (updates to inline headers, light sections, provenance docs, research)
4. Cascade propagation records (what was traced, what was fixed at source)
5. Cross-stage synthesis report
6. Unanimity verification report
7. Updated PIPELINE-MANIFEST.md
8. Updated RESEARCH-ACTIVE.md
9. Accumulated identity delta file

---

═══════════════════════════════════════════════════════════════════════════════
## ANTI-PATTERNS FOR THE EXECUTING INSTANCE
═══════════════════════════════════════════════════════════════════════════════

**Do NOT do any of these:**

1. **Skimming the master prompt.** You will miss critical details. Read every line.

2. **Planning from memory after one read.** Re-read specific sections as you plan each phase.

3. **Using subagents instead of TeamCreate.** The user explicitly requires TeamCreate agent teams with named agents, task lists, and message passing.

4. **Abbreviating prompt templates.** When spawning agents, use the EXACT prompt templates from the master prompt. Do not paraphrase.

5. **Skipping the Cold Look.** The Temporal Firewall exists for a reason. Visual auditors must react to what they SEE before reading any specs.

6. **Skipping scroll-through.** Full-page screenshots compress 15,000px pages to thumbnail scale. Scroll-through is mandatory for Standard and Standalone modes.

7. **Fixing HTML without enriching provenance.** The whole point is that fixes flow INTO the knowledge layers, not just surface patches.

8. **Surface-only fixes.** Every finding must be root-cause classified. If it's not Surface-class, fix at the source layer.

9. **Treating this as a CSS audit.** This is a PERCEPTUAL audit. The questions are about what you SEE, not what the CSS says. If your agents are reporting "border-radius: 0 confirmed," they're doing it wrong.

10. **Ignoring the cross-reference matrix.** After planning, you MUST verify every section of the master prompt maps to a plan step. If it doesn't, your plan has gaps.

---

═══════════════════════════════════════════════════════════════════════════════
## THE ONE THING TO REMEMBER
═══════════════════════════════════════════════════════════════════════════════

> **The master execution prompt is 1,704 lines long because every line matters.**
> **Your plan must account for every one of those lines.**
> **If your plan is shorter than 200 steps, you probably missed something.**
> **Cross-reference. Cross-reference. Cross-reference.**

═══════════════════════════════════════════════════════════════════════════════
