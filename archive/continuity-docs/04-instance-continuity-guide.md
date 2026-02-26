# Instance Continuity Guide: What a New Claude Instance Needs to Know

**Author:** metacognitive-architect
**Date:** 2026-02-15
**Purpose:** Enable a new Claude instance to pick up seamlessly from where this conversation left off, with all the implicit context that research files alone cannot convey.

---

## START HERE

You are entering a long-running design system project at a specific inflection point. Two research investigations just completed. The user is deciding what to do next. Read this guide before anything else.

**Your first 3 actions should be:**
1. Read this guide completely
2. Read the rigidity unified synthesis (`ephemeral/rigidity-research/06-unified-synthesis.md`) -- it contains the current settled position
3. Read `design-system/compositional-core/CLAUDE.md` -- it's the operational protocol you'll work within

**Do NOT start by:**
- Reading all 11 research files (overwhelm, and the syntheses capture the key content)
- Proposing solutions (the user has been burned by premature solutioning)
- Building anything without first asking the user. The research recommends building as the next step, but the user has not committed to this. Ask first.

### CRITICAL: Documentation Staleness Warning

`design-system/CLAUDE.md` has been UPDATED (2026-02-15) to reflect Phase D COMPLETE. `pipeline/05-COMPLETE-ROADMAP.md` has also been updated with correct phase statuses.

MEMORY.md has been REORGANIZED (2026-02-15) to fit within the 200-line limit. Strategic discoveries, tier model, and modification recommendations now load. Detailed phase histories moved to `memory/phase-history.md` and `memory/agent-team-lessons.md`.

---

## THE 5 MOST IMPORTANT THINGS TO UNDERSTAND

### 1. This Is a Design System for AI-Generated HTML Pages, and the User Is Its Architect

The project is a design system called "KortAI" that produces single-file HTML pages from content. The pages are built by Claude agents (Sonnet models), not humans. The user orchestrates multi-agent teams (up to 50+ agents) to build, audit, and refine these pages. The design system has:
- 3 soul constraints (border-radius: 0, box-shadow: none, warm palette)
- 65 design tokens
- 18 compositional mechanisms
- A tension-composition pipeline that derives unique metaphors for each page
- 30 validated showcase pages (DD/OD/AD/CD explorations)
- A 6-layer compositional-core extraction

The user cares deeply about both the PRODUCT (rich, engaging HTML pages) and the PROCESS (how agents are orchestrated to produce them).

### 2. Two Research Investigations Just Completed -- Richness and Rigidity

**Investigation 1 (Richness):** 5 agents answered "What IS richness?" The core finding: richness is technique saturation (how many CSS mechanisms are deployed in coordinated multi-channel ways), and the pipeline's current "sample 2-4 mechanisms" instruction caps output far below showcase levels. Variant B (the best pipeline output) used 5/44 techniques vs CD-006's 44/44.

**Investigation 2 (Rigidity):** 6 agents answered "Are we pigeonholing ourselves into rigidity?" The core finding: the paradox dissolves -- showcase pages were MORE rigid than the pipeline (78 constraints at CD-006 vs ~20 in the pipeline), and their richness came FROM that rigidity. The real issue is rigidity in the wrong places (mechanism caps that limit) vs right places (identity constraints that enable).

Both investigations were triggered by the USER'S questions, not by project planning. The user drives the intellectual direction.

### 3. The User's Emotional and Motivational Context

The user said: "Before we even had KortAI... I didn't feel like I wanted to read this." This is the PERSONAL motivation behind the entire project -- transforming flat documents into "places you want to spend time in."

When the user said "All dimensions, no compromise," they meant: explore the FULL possibility space of richness before constraining. Don't pre-optimize. Don't settle for "good enough" prematurely.

When the user said "Are we pigeonholing ourselves into rigidity?", they were expressing a FEAR -- that the systematic approach they've built (convention specs, mechanism catalogs, mandatory gates) might be calcifying into the very thing that prevents the creative freedom that produced the showcase pages. This fear was taken seriously, investigated thoroughly, and partially resolved (the "paradox" dissolves, but the concern about ambient rigidity is real).

The user is NOT asking for validation. They are asking for genuine investigation. They value being challenged and corrected when the evidence supports it.

### 4. The Conversation Arc (What Was Discussed, In What Order, Why)

The conversation followed this trajectory:

**Phase 1: "What is richness?"**
The user asked this after reviewing Phase D validation results, where Variant B (the best tension-pipeline output) scored well on compliance but felt "less rich" than showcase pages. This launched the first 5-agent research team.

**Phase 2: Identity challenge**
After reading the richness research, the user pushed back: "Wasn't the identity ALSO made through tension and deriving questions?" This challenged the assumption that Variant B lacked identity. The research team had framed it as "cold content with no exploration history" -- the user correctly identified this as inaccurate. Variant B DID derive identity through the pipeline; it just deployed fewer techniques. This led to the identity continuum model (metaphor-only -> metaphor + shallow technique -> metaphor + deep technique).

**Phase 3: "All dimensions, no compromise"**
The user wanted the FULL showcase-level richness explored, not a constrained subset. This was about intellectual thoroughness, not about literally demanding maximum richness for every page. The user wants to UNDERSTAND the full space before making calibrated decisions.

**Phase 4: "Both reader experience AND proof-of-capacity"**
The user articulated a DUAL motivation: pages should be engaging for readers AND demonstrate the design system's full capability. This isn't vanity -- it's a legitimate design goal (the system should prove itself through its output).

**Phase 5: "Are we pigeonholing ourselves into rigidity?"**
THIS is the question that launched the second research team. The user read the richness synthesis's recommendations (raise mechanism mandates, add fractal gates, require coherence tables) and felt uncomfortable. The recommendations SOUNDED like adding more checklist items. The user's intuition: "We didn't have to put ourselves in a state of rigidity to achieve that richness." The research then CHALLENGED this premise (actually, showcase pages were more rigid) while VALIDATING the concern (some specification rigidity does limit).

**Phase 6: "Not just idealizing what each tier looks like"**
When the tier architect proposed 4 tiers (Floor/Middle/Ceiling/Flagship), the user explicitly rejected idealization. They wanted concrete, code-grounded specifications with specific CSS properties, not abstract descriptions. The tier architect then produced the most empirically grounded of all reports.

**Phase 7: Current position**
The conversation settled on a nuanced position: keep identity and procedural rigidity (it's generative), keep protective specifications (they prevent failures), remove the few limiting specifications ("sample 2-4"), add iterative discovery loops, and frame the system as toolkit rather than compliance checklist. The user has NOT yet committed to next actions.

### 5. The User's Implicit Preferences (From Observation, Not Explicit Statements)

**Agent teams, not sub-agents:** The user orchestrates large teams (7-50 agents) with explicit roles, waves, and handoffs. They do NOT use the Task tool's sub-agent pattern for research. They spawn named agents with detailed prompts.

**Opus models for leads, Sonnet for workers:** The user uses Opus 4.6 for team leads and metacognitive roles, Sonnet 4.5 for builder and auditor agents.

**Metacognitive analysis is valued:** The user consistently requests "what are we NOT thinking about?" agents. Every research team includes a contrarian/metacognitive analyst.

**Adversarial review is standard:** Fresh-eyes agents with zero prior context are used to catch blind spots.

**The user reads everything:** They read all agent output carefully, synthesize across reports, and form their own conclusions. They are not delegating judgment -- they are using agents as research amplifiers.

**Comprehensive > concise:** When the user says "research this," they mean DEEPLY. 5-agent teams producing 15,000+ words of analysis is normal and expected.

**Ephemeral folder discipline:** All agent research goes in `ephemeral/`. Never create top-level project folders.

**Commits are intentional:** The user commits at specific milestones. They ask for commits explicitly. Never auto-commit.

---

## KEY PHILOSOPHICAL POSITIONS ESTABLISHED

### Position 1: Richness Is Vocabulary Fluency, Not Freedom

"Richness is the fluency that comes from having many rigid words to compose with." The showcase pages achieved maximum richness at maximum rigidity because most of their rigidity was VOCABULARY (new compositional words) not PROHIBITION (things you can't do). The constraint/vocabulary ratio shifted from 0.89 at DD to 0.26 at CD -- vocabulary grew 4x faster than constraints.

### Position 2: The Pipeline's Problem Is Wrong-Place Rigidity, Not Too Much Rigidity

The pipeline is rigid in the wrong places (mechanism caps: "sample 2-4") and not rigid enough in the right places (no fractal gate, no multi-channel coherence requirement). The fix is not "less rigid" but "rigid differently."

### Position 3: Four Types of Rigidity Exist

1. **Identity rigidity** (ALWAYS enabling): soul constraints, tokens, typography
2. **Procedural rigidity** (STRUCTURAL): phase gates, library sequencing
3. **Specification rigidity** (MIXED): some protective (940px container), some limiting ("sample 2-4")
4. **Ambient rigidity** (EMERGENT): the volume of constraints itself creating cognitive overload

### Position 4: Content Type Should Determine Richness Level

Not all content benefits from maximum richness. API references need clarity, not atmosphere. The tier system (Floor/Middle/Ceiling/Flagship) with Middle as universal floor was the consensus recommendation. But the user has NOT committed to this yet.

### Position 5: The Engagement Floor Is the Real Question

Rather than "how do we add showcase richness to ALL content," the better question is "what is the minimum that prevents the 'eyes drift off' feeling?" An exceptional Middle-tier page (full density rhythm, zone backgrounds, grid layouts, dark header, NO metaphor) has never been built. If it achieves the "place" feeling, the Ceiling tier becomes optional for most content. This is the SINGLE MOST IMPORTANT UNTESTED HYPOTHESIS.

### Position 6: The Prohibition vs Vocabulary Distinction Is Concrete

When the user asked for this explained concretely, the answer was: compare Variant B's CSS (174 custom properties, zero grid, zero flex, zero pseudo-elements) with OD-004's CSS (435 custom properties, scroll animations, solid offset depth, semantic spacing aliases, stratum boundaries). Variant B has the PROHIBITIONS (border-radius: 0, box-shadow: none) but lacks the VOCABULARY (the 18+ mechanisms that turn constraints into expression).

---

## COMMON MISCONCEPTIONS A NEW INSTANCE MIGHT FORM

### Misconception 1: "The user wants to simplify the system"
**Reality:** The user wants to understand the system DEEPLY enough to know where to add and where to remove. They are not anti-complexity. They are anti-THOUGHTLESS complexity. The rigidity investigation didn't conclude "remove rules" -- it concluded "keep enabling rules, remove limiting ones."

### Misconception 2: "The research found that richness doesn't matter"
**Reality:** The metacognitive analyst CHALLENGED whether richness always helps (Challenges 1, 3, 6 in `04-metacognitive-analysis.md`). But these challenges were NOT endorsed as conclusions by the synthesis. They were flagged as OPEN QUESTIONS. The user values richness. The question is how to achieve it efficiently, not whether to pursue it.

### Misconception 3: "Variant B was a failure"
**Reality:** Variant B scored 18/19 programmatic checks, 4/5 novelty, and was the best Phase D output. It demonstrated that the pipeline WORKS for metaphor derivation. The "richness gap" is about technique density, not about fundamental pipeline failure. The user explicitly pushed back when the framing suggested Variant B lacked identity.

### Misconception 4: "The showcase pages were created through free-form exploration"
**Reality:** The showcase pages operated under 17-78 constraints, 43+ research applications, convention specifications, and 4-6 adversarial audit passes. The "organic" feeling came from ITERATIVE DISCOVERY within constraints, not from freedom.

### Misconception 5: "The next step is to implement the 4 modifications"
**Reality:** The modification analysis recommended ADOPTING only 1 of 4 as-proposed (fractal gate), MODIFYING 2 (mechanism mandate -> per-category minimum; coherence table -> 3-transition spot-check), and REJECTING 1 (technique count metric). The user has NOT yet approved any modifications. The conversation ended with analysis complete, not with decisions made.

### Misconception 6: "The project is about web development"
**Reality:** The project is fundamentally about METACOGNITION -- understanding how AI agents create, what constrains their output, how to orchestrate creative processes at scale, and how to build systems that compound learning. The HTML pages are the artifact, but the process insights are the real product. The user's memory file tracks agent team lessons alongside design system evolution.

---

## RECOMMENDED READING ORDER

For a new instance that needs to get up to speed:

### Essential (Read First, ~30 min)
1. **This guide** (you're reading it)
2. `ephemeral/rigidity-research/06-unified-synthesis.md` -- current settled position on richness vs rigidity
3. `design-system/compositional-core/CLAUDE.md` -- the operational protocol

### Important Context (~20 min)
4. `ephemeral/richness-research/05-unified-synthesis.md` -- the richness investigation's final position
5. `ephemeral/rigidity-research/02-modification-analysis.md` -- detailed analysis of the 4 proposed changes (the most actionable report)
6. `ephemeral/rigidity-research/03-tier-specifications.md` -- concrete tier definitions grounded in code

### Deep Dive (if needed for specific tasks)
7. `ephemeral/richness-research/01-richness-anatomy.md` -- the empirical CSS technique inventory (the data foundation)
8. `ephemeral/richness-research/02-identity-investigation.md` -- the identity continuum model
9. `ephemeral/rigidity-research/01-rigidity-archaeology.md` -- 18 rigidity patterns catalogued across DD-CD
10. `ephemeral/rigidity-research/05-metacognitive-rigidity.md` -- the 4-type rigidity taxonomy and "paradox dissolution"
11. `ephemeral/richness-research/03-implications-landscape.md` -- implications for production migration
12. `ephemeral/richness-research/04-metacognitive-analysis.md` -- contrarian challenges (15 blind spots)
13. `ephemeral/rigidity-research/04-reproducibility-analysis.md` -- per-tier reproducibility with 8 specific skill modifications

### Project Context (if needed)
14. `design-system/CLAUDE.md` -- root navigation for the design system
15. The user's MEMORY.md (auto-loaded) -- full project history

---

## FIRST, SECOND, THIRD ACTIONS WHEN PICKING UP

### If the user wants to CONTINUE THE CONVERSATION:
1. **First:** Summarize where the conversation left off: "Two research investigations completed (richness + rigidity). The core finding is that rigidity in the right places ENABLES richness. The settled recommendations are: keep all identity/procedural rigidity, remove 'sample 2-4' mechanism cap, adopt fractal gate, modify coherence check to 3-transition spot-check, reject technique count metric. The most important untested hypothesis is whether an exceptional Middle-tier page achieves the 'place' feeling."
2. **Second:** Ask what the user wants to do next. Do NOT assume. Options include: implement skill modifications, build an experimental Middle-tier page, continue philosophical exploration, commit research artifacts, or something entirely different.
3. **Third:** Execute what the user asks, using the research as grounding.

### If the user wants to BUILD something:
1. **First:** Read `design-system/compositional-core/CLAUDE.md` and follow its always-load protocol
2. **Second:** Determine Track 1 vs Track 2 based on the Addition Test
3. **Third:** Build, following the phase-gated workflow

### If the user wants more RESEARCH:
1. **First:** Identify which open questions from the syntheses are relevant (5 open questions in each synthesis = 10 total)
2. **Second:** Propose an agent team structure (the user prefers 5-14 named agents with specific roles)
3. **Third:** Wait for user approval before spawning agents

---

## IMPLICIT CONTEXT RESEARCH FILES DON'T CAPTURE

### The Conversation's Emotional Temperature

The user is genuinely excited about this system. When they said "I didn't feel like I wanted to read this" about pre-KortAI content, and then saw the showcase pages working, that was a TRANSFORMATIVE moment for them. The design system isn't just a technical project -- it represents the possibility that AI can create genuinely beautiful, engaging experiences from ordinary content.

The rigidity question came from a place of PROTECTIVE concern, not criticism. The user has invested enormous effort (hundreds of hours, 15+ agent teams) into building this system. They fear that systematizing it might kill the very quality that made it special. The research ADDRESSED this fear (the paradox dissolves, systematization HELPS), but the emotional weight of the concern is real.

### The "Both/And" Pattern

The user consistently rejects false dichotomies:
- Not "richness OR rigidity" -- both can coexist
- Not "reader experience OR proof-of-capacity" -- pages should serve both
- Not "showcase OR production" -- the floor should be dramatically higher than baseline
- Not "identity as label OR identity as technique" -- it's a continuum
- Not "pipeline OR organic exploration" -- the pipeline should enable organic-FEELING output

When you encounter a binary framing, the user will likely push toward integration. Lead with "both/and" framing.

### What "Not Just Idealizing" Means in Practice

The user reacted negatively when a tier system was initially described in abstract terms ("Tier 2 is pages with moderate richness"). They wanted CONCRETE specifications: how many mechanisms, how many CSS lines, what specific properties, what specific build times. The tier architect report (`03-tier-specifications.md`) was praised because it worked BACKWARD from actual code (Variant B CSS, OD-004 CSS, CD-006 CSS) rather than forward from idealized descriptions.

When presenting options or recommendations, ground them in SPECIFIC artifacts the user has already seen. "Like Variant B but with grid layouts and zone backgrounds" is better than "enhanced Track 1 with spatial variety."

### The Agent Team Orchestration Preference

The user has refined a specific orchestration pattern over 15+ agent teams:
- **Waves:** Agents are spawned in sequential waves (Wave 1 completes before Wave 2 starts)
- **Named roles:** Every agent has a specific name and role (archaeologist, analyst, synthesizer)
- **File-only is reliable:** Agents that only read/write files (no Playwright) are highly reliable
- **Playwright needs scheduling:** Only 1-2 agents should use Playwright concurrently
- **Recovery agents:** Plan for agents that fail to write output files (~20-30% failure rate in some roles)
- **Always specify output:** Every agent prompt must explicitly state "You MUST write your output file using the Write tool"

### The "Sample 2-4 Mechanisms" Is Not Yet Changed

Despite being identified as the single most limiting specification across ALL 11 research reports, the SKILL.md file has NOT been modified yet. No skill modifications have been applied. The research is complete but implementation is pending the user's decision.

**Technical detail:** The instruction exists in TWO INCONSISTENT forms in the skill -- "sample 2-4" in one location and "3-5" in another. This inconsistency itself suggests the number was never precisely calibrated. The reproducibility investigator flagged this specifically. The recommended replacement is NOT a higher number but a per-category minimum: "For each of the 5 property categories (Spatial, Temporal, Material, Behavioral, Relational), identify AT LEAST ONE mechanism" -- which naturally lands at 5-10 without an arbitrary count.

### Phase D Was a 5-Variant Controlled Experiment

Phase D tested 5 configurations against the same content:

| Variant | Config | Compliance | Novelty | Verdict |
|---------|--------|------------|---------|---------|
| Track 1 | Assembly (library only) | 11/19 | N/A | INSTANT FAIL (didn't follow always-load) |
| A | Skill-only | 15/19 | 3/5 | CONDITIONAL FAIL |
| **B** | **Weak permission** | **18/19** | **4/5** | **CONDITIONAL PASS (best)** |
| C | Anti-gravity | 17/19 | 1/5 (disputed) | FAIL (convergence) |
| D | Library-first | 18/19 | 0/5 | FAIL (intentional copy) |

Key Phase D findings: (1) container width is THE primary failure mode (3/5 pages violated 940px), (2) "always-load" protocol failure caused Track 1's instant fail, (3) "weak permission" framing ("available for reference") had ZERO behavioral effect on library utilization, (4) the Variant C report-writer truncation error (only read 200 of 80k log lines) missed a Phase 3.5 gate that WAS present -- a cautionary tale about file reading limits.

---

## THE ACCUMULATION THAT PRODUCED THE SHOWCASE PAGES

Research files reference "337 findings" and "94 external research" items that accumulated across 4 stages. Here is the concrete trajectory a new instance would not grasp from the research alone:

```
DD Stage (6 explorations): 17 constraints, 10 CSS techniques
  + 18 DD findings + 12 external research items
  + First convention spec written
  |
OD Stage (6 explorations): 38 constraints, 23 CSS techniques
  + 17 OD findings + 33 external research items + OD convention spec
  + Key discovery: "Organization IS Density" (OD-F-005)
  |
AD Stage (6 explorations): 60 constraints, 33 CSS techniques
  + AD convention spec + axis pattern system
  |
CD Stage (6 explorations): 78 constraints, 44 CSS techniques
  + 28 CD findings + 39 R5 findings + CD convention spec
  + CD-006 crown jewel: synthesis of ALL prior stages
```

Each stage's builder read ALL prior stage outputs, applied ALL prior research, operated under ALL prior constraints, and was audited by 4-17 adversarial agents. The tension-composition skill compresses this entire 4-stage, 337-finding chain into a single 1,402-line pipeline instruction that says "sample 2-4 mechanisms." That is the compression problem.

The showcase pages were not "organic" -- they were the product of the heaviest-weight creative process the project has used. This matters because the user's intuition ("we didn't have to put ourselves in a state of rigidity to achieve that richness") was actually factually incorrect, and the research proved this. But the user's CONCERN (that mandating rigid numbers could create a different, limiting kind of rigidity) was validated.

---

## WHAT THE RESEARCH FILES DON'T TELL YOU

1. **The user's tone preferences:** Direct, substantive, no hedging, no excessive caveats. The user appreciates when agents take clear positions even on uncertain ground. "Here is what I believe and why, here is where I'm uncertain" > "it depends on many factors."

2. **The "meta-to-output ratio" concern:** The user is aware (from the workflow metacognition analysis) that the project has a 2.6:1 ratio of infrastructure to product. They are watchful about over-researching and under-building. If you sense the conversation drifting toward more analysis when action would be more productive, it's appropriate to note this.

3. **The compaction/context management reality:** The user's sessions regularly hit context limits. MEMORY.md is truncated at 200 lines (currently 389 lines -- truncated). Compaction-surviving patterns matter. If you identify important information, suggest updating MEMORY.md.

4. **The git commit discipline:** The user commits at deliberate milestones with descriptive messages. They have not committed the richness or rigidity research yet. These are in `ephemeral/` directories which are untracked.

5. **The next ACTUAL experiment matters more than more research:** The unified syntheses both conclude that one experiment (building an exceptional Middle-tier page) would resolve more open questions than additional analysis. The user may or may not agree -- but if they ask "what should we do next?", this is the evidence-based answer.

6. **The user's exact words that drove pivots:** Three specific user statements reshaped the entire investigation:
   - "Wasn't the identity ALSO made through this tension and deriving questions that derive metaphors that derive these compositional layouts?" -- This forced the richness team to acknowledge Variant B's identity was GENUINE, not cold assembly. The initial framing was wrong.
   - "I feel like it's very easy to get that confused with giving it these concrete mechanics or concrete mandates or concrete metrics... that enters us in a state of rigidity that can go unchecked." -- This launched the entire rigidity investigation. The user read the richness team's 4 recommendations and felt they sounded like MORE checklist items.
   - "Not just idealizing what each tier looks like" -- This forced the tier architect to ground specifications in actual CSS from existing pages rather than abstract descriptions.

7. **The project's broader scope beyond this conversation:** This project has run 15+ agent teams across months. The design system has DD, OD, AD, CD exploration stages, a 3x comprehensive audit (50 agents), skill enrichment, provenance remediation, workflow metacognition analysis, and more. The richness/rigidity research is one conversation within a much larger arc. The user's MEMORY.md (though truncated) contains the full history. The validated explorations live at `design-system/validated-explorations/` (density/, organizational/, combination/ directories -- 19 HTML files that are the "fortress zone," zero deletions allowed).

8. **The Goodhart's Law warning is real:** The modification analyst demonstrated that adding all 4 proposed modifications AS ORIGINALLY STATED would create a "checklist factory." The most dangerous modification (technique count as X/18 metric) was REJECTED by the synthesis because it converts quality into quantity. This is a live concern -- any future modification to the pipeline should be evaluated through the Rigidity Test: "Can you imagine a genuinely excellent page that VIOLATES this constraint? If yes, the constraint is LIMITING."

---

## THE VOCABULARY OF THIS PROJECT

Key terms that have specific meanings in this context:

- **Soul constraints:** border-radius: 0, box-shadow: none, warm palette -- the 3 non-negotiable identity anchors
- **Tension-composition pipeline:** The 7-phase process for deriving unique metaphors from content
- **Addition Test:** "Can existing components fulfill this WITHOUT transforming their meaning?" -- determines Track 1 vs Track 2
- **Anti-gravity:** The 5 mechanisms (R1, R2, R3, R5, R6) that prevent pattern-matching/template convergence
- **Mechanism catalog:** 18 reusable CSS techniques (border-weight gradient, 2-zone DNA, solid offset, etc.)
- **Phase D:** The extraction validation that produced Variant B (best pipeline output to date)
- **Variant B:** The "scientific calibration laboratory" metaphor page, 18/19 compliance, 4/5 novelty -- the baseline for "what the pipeline currently produces"
- **Crown jewels:** DD-006 (fractal), OD-004 (geological confidence), CD-006 (pilot migration) -- the best showcase pages
- **Middle tier:** The proposed universal floor: 8-10 mechanisms, density rhythm, zone backgrounds, grid/flex, dark header, NO metaphor derivation required
- **Flagship tier:** Full showcase treatment: 16-18 mechanisms, multi-pass audit, unique metaphor, 3-5 hours
- **Always-load protocol:** MANDATORY first step -- read prohibitions.md (353 lines) + tokens.css (174 lines) before ANY work. Phase D Track 1 failure was caused by skipping this.
- **Compositional-core:** The 6-layer operational vocabulary (identity -> vocabulary -> grammar -> components -> case-studies -> guidelines), extracted in Phase C by 19 agents. 43 files, 880KB. Lives at `design-system/compositional-core/`
- **Binary rules principle:** Binary rules ("MUST"/"MUST NOT") achieve 100% agent compliance. Judgment rules ("consider"/"strive for") achieve ~0%. THE most important architectural principle for agent-facing instructions.
- **Two-phase boundary:** Agents that read library BEFORE deriving metaphor produce template convergence. The phase-gated access (R1) prevents this by making case-studies/ physically inaccessible until Phase 5.
- **Rigidity Test:** "Can you imagine a genuinely excellent page that VIOLATES this constraint?" If yes, the constraint is LIMITING. If no, it is ENABLING. Applied by the modification analyst to evaluate all 4 proposed changes.
- **Inverted-U curve:** The relationship between total rigidity and richness is NOT monotonically decreasing. It is an inverted U heavily right-shifted -- peak richness occurs at HIGH total rigidity (identity + procedural + protective), not low. Pre-design-system = low rigidity, low richness. Current pipeline = moderate rigidity, moderate richness. Showcase pages = high rigidity, peak richness.

---

## CROSS-DOCUMENT MAP

The continuity package consists of 4 complementary documents. This guide is one of them:

| Doc | File | Purpose | Read When |
|-----|------|---------|-----------|
| 01 | `01-narrative-arc.md` | Complete chronological story of both investigations | Understanding the intellectual journey |
| 02 | `02-worldview-and-goals.md` | Current beliefs, tier model, goals, problems, actionables | Deciding what to do next |
| 03 | `03-documentation-audit.md` | Every stale/misleading item in existing docs, with fix priorities | Before updating any CLAUDE.md files |
| 04 | `04-instance-continuity-guide.md` (this file) | Implicit context, user preferences, misconceptions to avoid | FIRST -- before anything else |

The raw research lives in two directories:
- `ephemeral/richness-research/` (5 files, ~30,000 words)
- `ephemeral/rigidity-research/` (6 files, ~35,000 words)

The operational design system protocol: `design-system/compositional-core/CLAUDE.md` (493 lines)

---

**END INSTANCE CONTINUITY GUIDE**
