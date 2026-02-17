# AUXILIARY EXECUTION WRAPPER -- Flagship Experiment

> **PURPOSE:** This wrapper ensures the enriched master execution prompt is executed with ZERO skimming, ZERO summarizing, and MAXIMUM invocation of every line, rule, skill, and protocol. Paste this ENTIRE document (wrapper + enriched prompt + supporting file paths) into a fresh Claude instance.

> **WHAT YOU ARE BUILDING:** A single HTML page that is the crown jewel of the KortAI design system. Content source: `design-system/research/RESEARCH-SYNTHESIS.md`. This page must be warm, authoritative, unhurried -- and it must achieve PA-05 >= 3/4 DESIGNED at final audit.

---

================================================================
PHASE 0: MANDATORY READING PROTOCOL (DO THIS FIRST)
================================================================

You are about to execute the most important build in this design system's history. 22 agents across 5 research passes produced 758,000 lines of analysis to create the enriched prompt below. Every line exists because an agent found its absence would cause failure.

**YOUR FIRST ACTION -- before spawning any agents, before reading any design system files, before doing ANYTHING else:**

Read the enriched master execution prompt at:
```
ephemeral/prompt-enrichment-audit/10-ENRICHED-MASTER-EXECUTION-PROMPT.md
```

Read it LINE BY LINE. All 530 lines. Then write a file called `00-prompt-digest.md` in your working directory containing:

```
SECTION A CONVICTION (82 lines): [quote your 3 most important takeaways]
SECTION B EXECUTION (107 lines): [list ALL 71 rule IDs: S-01 through S-15, U-01 through U-10, C-01 through C-18, MC-01 through MC-08, SC-01 through SC-08, MG-01 through MG-05, P-01 through P-08]
SECTION C COORDINATION (49 lines): [list all 5 passes, all 6 gates, all 5 communication checkpoints]
SECTION D CLOSING (10 lines): [quote the mission statement and absence coherence principle]
APPENDIX PARAMETERS: [list all 30 parameters with their authoritative values]
ENRICHMENT TRACEABILITY: [confirm all 11 enrichments present: B1, B3, C3, A1, A2, A3, D3, BT-08, BT-09, BT-10, BT-11]
```

**If you cannot produce this digest, you have not read the prompt.** Do not proceed until this file exists with all fields populated.

================================================================
PHASE 1: DEEP FILE READING (BEFORE ANY TEAM CREATION)
================================================================

After writing your prompt digest, read these files IN THIS ORDER. Each reading produces a MANDATORY extraction artifact.

### 1A. DESIGN SYSTEM CORE (6 files -- understand the building material)

```
READ #1:  design-system/compositional-core/identity/prohibitions.md
          EXTRACT: List all 22 prohibitions. Write to 00-prohibitions-extract.md

READ #2:  design-system/compositional-core/vocabulary/tokens.css
          EXTRACT: List all CSS custom properties. Write to 00-tokens-extract.md

READ #3:  design-system/compositional-core/grammar/mechanism-catalog.md
          EXTRACT: List all 18 mechanisms with their impact profiles, application modes, and zone mappings. Write to 00-mechanisms-extract.md

READ #4:  design-system/compositional-core/guidelines/semantic-rules.md
          EXTRACT: List all compositional grammar rules. Write to 00-semantic-rules-extract.md

READ #5:  design-system/compositional-core/components/merged-components.css
          EXTRACT: List all component classes. Write to 00-components-extract.md

READ #6:  design-system/compositional-core/case-studies/_INDEX.md
          EXTRACT: Note which case studies exist. Write to 00-case-studies-extract.md
```

### 1B. SKILLS (2 files -- understand the pipelines you MUST invoke)

```
READ #7:  ~/.claude/skills/tension-composition/SKILL.md (ALL 1,932 LINES)
          This is NOT optional background. This is the PIPELINE your metaphor agent EXECUTES.
          EXTRACT: List all 7 phases (0-5 + commitment gate), all 14 axes, all 6 metaphor quality criteria,
          all 6 rejection checks, the void prevention gate, spatial safeguards.
          Write to 00-tc-skill-extract.md

READ #8:  ~/.claude/skills/perceptual-auditing/SKILL.md (ALL 847 LINES)
          This is NOT optional background. This is the AUDIT PROTOCOL your 9 PA auditors EXECUTE.
          EXTRACT: List all 48+ PA questions grouped by dimension, the PA-05 scoring rubric (4 sub-criteria),
          PA-50 through PA-53 void detection pipeline, severity calibration (CATASTROPHIC/WOULD-NOT-SHIP/LOOKS-WRONG),
          Mode 4 operational requirements, cold look protocol.
          Write to 00-pa-skill-extract.md
```

### 1C. CROWN JEWELS (2 files -- understand what quality looks like)

```
READ #9:  design-system/validated-explorations/combination/CD-006-pilot-migration.html
          EXTRACT: Note container width, transition types used, var() count, section structure,
          mechanism count, and what makes this 39/40. Write to 00-cd006-extract.md

READ #10: design-system/validated-explorations/density/DD-006-fractal.html
          EXTRACT: Note fractal coherence structure, scale count, container width.
          Write to 00-dd006-extract.md
```

### 1D. CONTENT SOURCE (1 file -- the actual content you're building for)

```
READ #11: design-system/research/RESEARCH-SYNTHESIS.md
          EXTRACT: Word count per section, content type mix (NARRATIVE/REFERENCE/CODE/DATA),
          natural groupings, density map, peak/dip locations.
          Write to 00-content-inventory.md
```

### 1E. DEPTH RESOURCES (20 audit files -- read SELECTIVELY by agent role)

These 20 files contain the deep operational knowledge that produced the enriched prompt. Route them to the agents who need them:

```
TEAM-LEAD reads (for gate calibration and coordination):
  ephemeral/prompt-enrichment-audit/08-checkpoint-integration.md    -- D-004 critical items, threshold resolutions
  ephemeral/prompt-enrichment-audit/19-soundness-audit.md           -- all contradictions resolved, parameter table
  ephemeral/prompt-enrichment-audit/20-invocation-guarantee-audit.md -- zero dead lines system, per-agent contracts
  ephemeral/prompt-enrichment-audit/18-structural-anti-skimming-audit.md -- formatting for maximum compliance

METAPHOR AGENT reads (for TC pipeline execution):
  ephemeral/prompt-enrichment-audit/11-tc-deep-invocation.md        -- full TC phase map, axis invocation, technique catalog
  ephemeral/prompt-enrichment-audit/13-tc-pa-integration.md         -- TC-PA cross-skill integration, shared vocabulary
  ephemeral/prompt-enrichment-audit/15-scale-channel-invocation.md  -- 7 channels, operational formulas, agent-channel ownership

PLANNER reads (for mechanism deployment):
  ephemeral/prompt-enrichment-audit/14-enrichment-invocation-map.md -- 11 enrichments with exact invocation text
  ephemeral/prompt-enrichment-audit/16-multi-coherence-invocation.md -- 5 interaction types, CCS formula, cross-dimension matrix

INTENTIONALITY BUILDER reads (for composition quality):
  ephemeral/prompt-enrichment-audit/07-crown-jewel-design-system-audit.md -- 15 must-replicate techniques from CD-006/DD-006

PA AUDITORS lead reads (for Mode 4 deployment):
  ephemeral/prompt-enrichment-audit/12-pa-deep-invocation.md        -- 9-auditor deployment map, PA-50-53 pipeline
  ephemeral/prompt-enrichment-audit/17-pa-operational-scaffolding.md -- complete 9-auditor instruction sheets, cold look, severity

ALL AGENTS benefit from (for context):
  ephemeral/prompt-enrichment-audit/03-ceiling-reflections-audit.md  -- lessons from DO NOT SHIP ceiling experiment
  ephemeral/prompt-enrichment-audit/06-scale-metacognitive-audit.md  -- absence coherence, cognitive bias countermeasures
  ephemeral/prompt-enrichment-audit/09-adversarial-fresh-eyes.md     -- blind spots: reader absent, fear gradient, kill switch
  ephemeral/prompt-enrichment-audit/01-tc-skill-audit.md             -- TC gaps analysis
  ephemeral/prompt-enrichment-audit/02-pa-skill-audit.md             -- PA gaps analysis
  ephemeral/prompt-enrichment-audit/04-flagship-prep-crossref.md     -- 9 MUST gaps from flagship prep
  ephemeral/prompt-enrichment-audit/05-pre-flight-crossref.md        -- 6 critical actions from pre-flight
```

**CHECKPOINT: You MUST have 11 extraction files (00-*.md) PLUS the prompt digest before proceeding to Phase 2.**

================================================================
PHASE 2: TEAM CREATION AND AGENT SPAWNING
================================================================

Create a team using TeamCreate. Then create tasks and spawn agents following the enriched prompt's Section C1 agent roster EXACTLY:

### Pass 0: Content Architecture (2 Opus agents)

**Agent: content-architect (Opus)**
- Reads: 00-content-inventory.md, 00-mechanisms-extract.md, 00-semantic-rules-extract.md
- Executes: TC Phase 0 (content assessment). Classifies content type, scope, sections, tier.
- Produces: `01-content-assessment.md` with word count per section, content type mix, zone mapping, spatial budget table
- MUST enforce P-01: content inventory BEFORE metaphor derivation
- MUST enforce P-02/0E: NO mechanism catalog access before metaphor lock-in

**Agent: metaphor-agent (Opus)**
- Reads: 00-tc-skill-extract.md, TC SKILL.md (full 1,932 lines), CD-006, DD-006, `11-tc-deep-invocation.md`
- Executes: TC Phases 1-3 (multi-axis questioning, tension derivation, metaphor collapse)
- Phase 1: Run ALL 4 core axes (FEEL/UNDERSTAND/DO/BECOME) + evaluate all 5 extended axes + check 5 trigger axes
- Phase 2: For each tension pair, apply Addition Test ("does combining create something neither has alone?") AND BECAUSE Test ("A exists BECAUSE B exists")
- Phase 3: Collapse to metaphor. Score on 6-criterion rubric (MG-01 >= 12/18). Run 6 rejection checks (MG-03). Run structural test (MG-04). Check spatial cost (MG-05 <= 15%).
- Produces: `02-metaphor-derivation.md` with full axis questioning output, tension pairs, metaphor candidate evaluation, rubric scores, rejection check results
- MUST SendMessage to team-lead with metaphor + rubric score BEFORE proceeding

**-> GATE 0:** Team-lead verifies content-to-void >= 60:40 estimate, zone count within S-15 limits, content/zone >= 1.5. If FAIL, restructure zones before proceeding.

### Pass 1: Spatial Skeleton (2 Sonnet builders + 1 Sonnet auditor)

**Agents: skeleton-builder-A and skeleton-builder-B (Sonnet, competitive)**
- Each reads: 00-tokens-extract.md, 00-prohibitions-extract.md, build plan from planner, `02-metaphor-derivation.md`
- Each builds: Independent HTML skeleton with container, header, sections, footer, basic typography
- MANDATORY: Run B10 self-check (12 items) BEFORE writing file
- MANDATORY: CP-A message to planner with container px, estimated height, content-to-void ratio, biggest spatial concern
- MANDATORY: CP-B message to team-lead with page height, content ratio, section count, deviations from plan

**Agent: embedded-auditor (Sonnet)**
- Has EXCLUSIVE Playwright access. No other agent touches Playwright during Pass 1.
- Monitors both skeletons in real-time
- Checks S-01 through S-15 on each skeleton
- Reports to team-lead: which skeleton is better and why

**-> GATE 1:** Team-lead runs SC-01 through SC-07 (7 binary spatial checks). Max 2 fix cycles. Fail after 2 = ABORT.
**-> GATE 2:** Header + Footer + all sections present.

### Pass 2: Mechanism Deployment (1 Sonnet builder)

**Agent: mechanism-builder (Sonnet)**
- Reads: Winning skeleton, 00-mechanisms-extract.md, build plan, `14-enrichment-invocation-map.md`
- Deploys 12-14 mechanisms per build plan. Hard cap 16.
- Per-category minimums: Spatial:1+ Hierarchical:1+ Chromatic:1+ Density:1+ Navigational:1+ (C-01)
- Documents rejection log: >= 21 considered-and-rejected placements (C-12)
- Creates >= 2 silence zones 200px+ (C-13)
- MANDATORY: CP-D message with mechanism count + spatial re-check (P-08: S-01 + S-02 must still pass)
- MANDATORY: If content-to-void degrades > 10 points from Pass 1, ROLLBACK and reduce elaboration

**-> GATE 3:** C-01 through C-04 pass. Spatial re-check confirms no regression.

### Pass 3: Metaphor Integration (1 Opus builder)

**Agent: metaphor-builder (Opus)**
- Reads: Post-mechanism HTML, `02-metaphor-derivation.md`, `15-scale-channel-invocation.md`, `16-multi-coherence-invocation.md`
- Integrates metaphor vocabulary, channel encoding, zone naming
- Achieves >= 5/7 channels active (SC-02), CCS >= 0.30 (MC-01)
- Creates >= 3 reinforcing pairs (MC-02), >= 2 modulating chains (MC-03)
- MANDATORY: Every structural element must survive MG-04 (remove labels, does structure alone communicate?)

**-> GATE 4:** Team-lead spawns 2 fresh-eyes agents (zero build context). Each answers: "Remove all text labels. Does the visual structure alone communicate a coherent organizing principle?" >= 70% structural = PASS.

### Pass 4: Intentionality (1 Opus builder)

**Agent: intentionality-builder (Opus)**
- Reads: Post-metaphor HTML, `07-crown-jewel-design-system-audit.md` (15 must-replicate techniques), `16-multi-coherence-invocation.md`
- Adds: bookending, self-reference, cognitive transitions, deliberate absence, meta-annotation
- Achieves >= 3/6 intentionality dimensions (C-15), >= 1 self-referential element (C-16)
- Creates 5-act reader journey per A8 (arrival, exploration, deep dive, resolution, conclusion)
- Every visual texture in Act 1 MUST recur in Acts 2-4

**-> GATE 5: MODE 4 PA (9 auditors + programmatic audit)**

### Pass 5: Mode 4 Perceptual Audit (9 Sonnet auditors + 1 weaver)

**BEFORE spawning ANY auditor:**
1. Team-lead serves the HTML via HTTP (Playwright blocks file://)
2. Team-lead captures ALL screenshots:
   - 3 viewports: 1440px, 768px, 480px
   - Cold look (single frame, 5 seconds) at each viewport
   - Full scroll-through at each viewport (scroll increments = 80% viewport height)
   - Save ALL screenshots with naming: `flagship-{width}-scroll-{NN}.png`
   - Disable animations: `* { animation: none !important; transition: none !important; opacity: 1 !important; }`
   - Wait for `document.fonts.ready` before any screenshot
3. Expected: 40-60 screenshots total

**THEN spawn 9 auditors IN PARALLEL, each with:**
- ONLY their assigned PA questions (see C4 in enriched prompt)
- ONLY the pre-captured screenshots they need (see PA scaffolding doc)
- ZERO build context, ZERO CSS source, ZERO mechanism list, ZERO prior audit results
- The PA SKILL.md file (all 847 lines)
- Mandatory cold look protocol: 5 seconds, gut reaction, LOCK reaction, THEN questions
- Mandatory "NO FINDING for PA-XX" for every question with no issue (prevents silent skipping)
- Finding template: PA-XX, severity (CATASTROPHIC/WOULD-NOT-SHIP/LOOKS-WRONG), what I see, what's wrong, what would fix it, gate impact
- Each auditor writes to their own findings file

**Auditor assignments (from C4):**
```
A: PA-01,02,03,04,05           (Identity + First Impression)
B: PA-06,07,08,09,10,11        (Spatial Composition)
C: PA-12,13,14,30-35,50,51     (Spatial Detail + Void -- HIGHEST priority)
D: PA-15,16,17,18,19           (Typography + Rhythm)
E: PA-20,21,22,23,24           (Component Quality)
F: PA-25,26,27,28,29,41        (Mechanism Deployment + Rhythm)
G: PA-36,37,38                 (Responsive + Accessibility)
H: PA-39,40,42,43,44           (Proportions + Polish)
I: PA-45,46,47,48,52,53        (Coherence + Void Assessment)
```

**Auditor C is critical:** Runs the void detection pipeline PA-50 -> PA-51 -> PA-52 -> PA-53 SEQUENTIALLY.
**PA-17 and PA-41 elevated:** Auditor F is primary but ALL auditors note rhythm/monotony observations.

**After all 9 auditors complete:**
- Team-lead (or weaver agent) synthesizes findings
- Cold look consensus: what do >= 5/9 auditors notice independently?
- PA-05 composite score: average of all 9 auditors' PA-05 assessments
  - 4/4 = DESIGNED. 3/4 = ACCEPTABLE. 2/4 = SIGNIFICANT ISSUES. 1/4 = DO NOT SHIP.
  - Calibration: Middle = 4/4, Ceiling = 1.5/4, CD-006 = 4/4, DD-006 = 4/4
- Ship decision: PA-05 >= 3/4 = SHIP. PA-05 < 3/4 = DO NOT SHIP.

**Programmatic audit (run in parallel with PA auditors):**
- S-01: container width via getBoundingClientRect()
- U-01 through U-10: computed style checks for all soul prohibitions
- S-07: CPL calculation
- Token compliance: count var() references vs total declarations
- S-10: void detection at viewport intervals

================================================================
PHASE 3: COMMUNICATION AND ACCOUNTABILITY
================================================================

### Mandatory Communication Protocol

The enriched prompt specifies 5 communication checkpoints (CP-A through CP-E) and a minimum of 8 substantive messages. This is NON-NEGOTIABLE. Here is exactly when each message fires:

```
CP-A: After builder reads plan -> Builder sends to Planner:
      "Container: ___px. Estimated height: ___px. Content-to-void: __:__. Biggest spatial concern: ___."

CP-B: After builder writes HTML -> Builder sends to Team-Lead:
      "Page height: ___px. Content ratio: __%. Sections: __. Deviations from plan: ___."

CP-C: After Gate 1 -> Team-Lead sends to ALL:
      "SC-01: PASS/FAIL. SC-02: PASS/FAIL. [all 7]."

CP-D: After Pass 2 -> Mechanism Builder sends to Team-Lead:
      "Mechanism count: __. Spatial re-check: S-01 ___px (PASS/FAIL). S-02 __% (PASS/FAIL)."

CP-E: Before each handoff -> Outgoing agent sends to incoming agent:
      "Confirmed: [measurements]. Concerns: [list]. Files: [paths]."
```

**ESCALATION TRIGGERS (MUST message immediately):**
- Any measurement within 10% of any threshold
- Any section with < 3 content elements
- Two mechanisms competing for same visual space
- Any builder uncertainty about a rule's application

**Zero messages at Gate 1 = PAUSE BUILD.** Do not proceed past Gate 1 if fewer than 3 messages have been sent.

### Gate Execution Log

Team-lead maintains a running gate execution log. For every gate:
```
GATE [N] at [timestamp]:
  [Rule ID]: [measured value] -> PASS/FAIL
  [Rule ID]: [measured value] -> PASS/FAIL
  ...
  VERDICT: PASS / FAIL (cycle [N] of max 2)
  ACTION: PROCEED / FIX [specific items] / ABORT
```

================================================================
PHASE 4: ANTI-SKIMMING ENFORCEMENT
================================================================

The enriched prompt uses 10 anti-skimming techniques. As the executing instance, you enforce them by:

1. **Rule IDs:** Every agent prompt must reference rules by their ID (S-01, not "container width rule"). If an agent cannot cite the rule ID, they haven't read the rule.

2. **Conviction quotes:** Each Opus agent must quote ONE line from Section A in their first checkpoint message. This proves they read the conviction layer.

3. **Self-check before file write:** The builder MUST produce a completed B10 self-check (12 items, all checked) BEFORE writing the HTML file. If the self-check is missing or incomplete, reject the file.

4. **"NO FINDING" requirement:** Every PA auditor must produce "NO FINDING for PA-XX" for every assigned question where no issue exists. If an auditor's output is missing PA question responses (neither finding nor no-finding), the audit is incomplete.

5. **Parameter verification:** When any agent cites a threshold value, verify it against the Appendix parameter table. If there's a discrepancy, the Appendix value is authoritative.

6. **Artifact chain:** Every phase produces a numbered artifact file. If a file is missing from the chain, the phase did not complete. The chain is:
   ```
   00-prompt-digest.md (Phase 0)
   00-*.md extraction files (Phase 1, 11 files)
   01-content-assessment.md (Pass 0)
   02-metaphor-derivation.md (Pass 0)
   03-build-plan.md (Pass 0-1 bridge)
   04-skeleton-A.html + 04-skeleton-B.html (Pass 1)
   05-winning-skeleton.html (Post-Gate-1)
   06-mechanism-deployed.html (Pass 2)
   07-metaphor-integrated.html (Pass 3)
   08-intentionality-complete.html (Pass 4)
   09-gate-execution-log.md (running)
   10-pa-findings-*.md (Pass 5, 9 files)
   11-pa-synthesis.md (Post-PA)
   12-final-verdict.md (Ship/No-Ship)
   ```

================================================================
PHASE 5: FAILURE RECOVERY
================================================================

### If Gate Fails (max 2 fix cycles per gate)

```
Cycle 1: Identify failing rules by ID. Fix ONLY those rules. Re-run gate.
Cycle 2: If same rules fail again, identify root cause. If spatial, check content density.
After 2 failures: ABORT that pass. Ship at lower tier:
  - Pass 2+ complete = ship as CEILING-PLUS
  - Pass 1 complete = ship as CEILING-MINUS
  - Pass 1 failing = ABORT entirely
```

### If PA-05 < 3/4

DO NOT SHIP. Document all CATASTROPHIC and WOULD-NOT-SHIP findings. If time permits (< 240 min elapsed), attempt targeted fixes on BLOCKING findings only, then re-run affected PA auditors.

### Staged Downgrade at 240 Minutes

If the experiment has consumed 240 minutes:
- Deliver whatever tier is complete
- Document what passes were completed and which gates passed
- Honest assessment > shipped artifact

================================================================
CRITICAL REMINDERS (read these LAST -- recency position)
================================================================

1. **Richness = semantic_density x restraint x spatial_confidence.** If spatial_confidence = 0, EVERYTHING = 0.

2. **The mission is beauty, not compliance.** Rules are guardrails. The destination is a page where content DEMANDED the structure.

3. **Absence coherence:** If you omit something, omit ALL elements at that tier. Consistent absence = restraint. Inconsistent absence = failure.

4. **Middle experiment at 2 scales: PA-05 4/4. Ceiling experiment at 4 scales: PA-05 1.5/4.** Do NOT over-engineer. Restraint is strength.

5. **CD-006 scored 39/40 with agent messaging. Ceiling scored DO NOT SHIP with zero messaging.** SendMessage is not overhead -- it IS the quality mechanism.

6. **STOP ANALYZING. START BUILDING.**

================================================================
END AUXILIARY EXECUTION WRAPPER
================================================================

Paste the enriched master execution prompt (10-ENRICHED-MASTER-EXECUTION-PROMPT.md) AFTER this wrapper. The receiving instance reads this wrapper FIRST for operational context, then the enriched prompt for the actual rules.
