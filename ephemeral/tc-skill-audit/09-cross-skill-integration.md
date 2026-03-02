# Cross-Skill Integration Architecture

How TC thinking + building combine into one agent session, with PA remaining separate.

---

## 1. Current State: Three Skills, Three Architectures

### 1.1 What Exists Today

**Tension-Composition (TC)** — `~/.claude/skills/tension-composition/SKILL.md` (842 lines + 232 line appendix)
- Pure analytical process: content assessment -> multi-axis questioning -> tension derivation -> metaphor collapse -> compositional architecture
- Produces a Conviction Brief (80-120 lines) as handoff artifact
- In sub-skill mode, stops at Phase 4.5; standalone mode continues to Phase 5 (HTML output)

**Build-Page v2** — `~/.claude/skills/build-page/SKILL.md` (957 lines)
- Orchestrator pattern: spawns agents, captures screenshots, runs gates, routes decisions
- 3 windows: DERIVE+BUILD (Window 1), EVALUATE (Windows 2+3: gates + PA), REFINE (Window 3)
- The orchestrator never builds; it spawns Opus agents to build and audit

**Build-Page v1 (archived)** — `~/.claude/skills/build-page-v1-archived/SKILL.md` (579 lines)
- TC analyst spawned separately, produces brief, hands off to builder
- Builder reads brief + design system files, builds from brief
- 9-auditor PA with weaver synthesis, up to 3 fix cycles

**Deep-Build** — `~/.claude/skills/deep-build/SKILL.md` (28 lines, wrapper for Node CLI)
- 56-104 deterministic `claude -p` calls
- Phase 0 (TC) -> Phase A (7 subsets x 8 corpus integration passes) -> Phase B (PA hardening)

**Perceptual Auditing (PA)** — `~/.claude/skills/perceptual-auditing/SKILL.md`
- Fresh-eyes principle: auditors receive ONLY screenshots + questions
- 20 experiential questions across 5 tiers
- Produces prose-based perceptual reports, not scores

### 1.2 The Architectural History Shows a Pattern

The system has evolved through 4 generations:

1. **v1**: TC agent (separate) -> Builder agent (separate) -> 9 PA auditors -> Weaver -> Fix cycles
2. **v2**: TC+Build merged into Window 1 (single agent derives + builds) -> PA evaluates -> REFINE (different builder)
3. **deep-build**: Programmatic orchestrator (Node CLI) running deterministic `claude -p` calls
4. **Proposed**: Single agent does ALL of TC thinking + building + self-reflection; PA invoked separately afterward

The trajectory is clear: each generation reduces agent boundaries. The compression loss at each handoff (50:1 in v1, still significant in v2) drives the merger.

---

## 2. Architecture of the Combined TC+Building Skill

### 2.1 The Fundamental Insight: TC Thinking IS Building

The v2 build-page skill already discovered this. Its Window 1 prompt says:

> "You will derive a metaphor, write a conviction brief, and build an HTML page — all in this session."

The conviction brief exists as an ARTIFACT within the same session, not as a handoff document. The builder writes it for themselves, as a creative commitment, before building. This is the correct architecture.

**What the combined skill preserves from TC:**
- Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + discovered axes) — the ENGINE of TC
- Tension derivation (content needs vs system constraints) — the BRIDGE
- The Addition Test, BECAUSE test, SUBSTITUTION test — the VALIDATORS
- Compositional idea commitment — the LOCK-IN
- The constructing-not-discovering metacognitive principle — the GUARDRAIL

**What the combined skill DROPS from TC:**
- Sub-skill vs standalone mode branching (PIPELINE-ASSUMPTION — there's only one mode now)
- The Conviction Brief as a HANDOFF artifact (COMPRESSION — the agent carries understanding in context, not in a document)
- Explicit phase numbering tied to orchestrator routing (Phase 0, Phase 1, etc.)
- Pre-computed tension landscapes specific to one design system (CHANNELING — Side B is derived at runtime)
- Domain search territory lists, incompatible domain families (CHANNELING — the agent's own creative search replaces menus)

**What the combined skill preserves from build-page:**
- Builder reads design system files AFTER creative commitment
- Self-contained HTML output with all CSS embedded
- Convention constraints (container width, warm palette, etc.) delivered as world physics
- Builder reflection protocol (6 dimensions)
- The principle that vocabulary files are tools, not instructions

**What the combined skill DROPS from build-page:**
- The orchestrator entirely (the agent IS the builder)
- Agent spawning, screenshot capture, gate running (these move to PA's responsibility or a post-build gate check)
- Routing decisions (SHIP/REFINE/RETHINK — the agent reflects, PA decides)
- The Weaver synthesis (PA handles its own synthesis)

### 2.2 Structural Concept

The combined skill is a single document that guides ONE Opus agent through:

```
THINK → COMMIT → BUILD → REFLECT
```

Not four separate phases with gates between them. A continuous creative session where thinking flows into building flows into reflection. The commitment point is the one structural boundary — before commitment, the agent is exploring; after commitment, the agent is executing.

---

## 3. The Flow: Think a Bit, Build a Bit, or Think Then Build?

### 3.1 Analysis of Both Approaches

**Option A: Linear (Think → Build)**
- TC Phases 0-3.5 run completely before any CSS is written
- Builder reads vocabulary files, then builds from commitment
- Matches the current v2 Window 1 architecture exactly
- Risk: the commitment made during thinking may not survive contact with CSS reality

**Option B: Iterative (Think ↔ Build)**
- Agent questions content, forms initial ideas, writes some CSS
- Building reveals new understanding, which feeds back into compositional thinking
- More natural creative process — artists don't finish thinking before they start making
- Risk: harder to structure in a skill file; agent may skip the thinking entirely and just build

**Option C: Think → Commit → Build with Feedback Loops**
- Full TC thinking runs first (questioning, tension derivation, compositional idea)
- Commitment is LOCKED
- Building proceeds from commitment, but the agent is ALLOWED to note where the commitment doesn't survive CSS and adjust execution (not the commitment itself)
- This is what v2 Window 1 actually does — and what the Reflection protocol captures

### 3.2 Recommendation: Option C with Explicit Permission

Option C is the right architecture for three reasons:

1. **The thinking produces understanding that changes what the agent sees in the design system files.** An agent who has run multi-axis questioning on content about systemic risk will READ the mechanism catalog differently than one who was just told "build a page about systemic risk." The questioning CREATES the perceptual lens.

2. **Premature building short-circuits the questioning.** If the agent starts writing CSS after the first axis (FEEL), it will commit to a visual direction before UNDERSTAND, RECONCILE, and DISCOVER have been explored. The thinking must complete before building.

3. **The commitment is the structural bridge.** Without a clear commitment point, the agent optimizes locally at each zone boundary rather than composing globally. The conviction brief (written for self, not handoff) IS the commitment.

**The explicit permission:** After commitment, if the agent discovers during building that a property of their compositional idea doesn't translate to CSS within system constraints, they may ADAPT the expression (how the idea manifests) without CHANGING the idea (what the page is trying to be). This is different from silent metaphor substitution — it's creative problem-solving within a committed frame.

---

## 4. The Transition: Thinking to Building

### 4.1 The Commitment Moment

The transition from thinking to building is an **explicit moment**, not a gradual flow. It looks like this:

1. Agent completes multi-axis questioning + tension derivation + compositional idea selection
2. Agent writes a SELF-COMMITMENT (~15-20 lines, not a formal brief):
   - What is this page trying to be? (1-2 sentences)
   - What is the core compositional idea? (1-2 sentences)
   - What are the zones and their character? (3-5 lines)
   - What CSS channels carry the idea? (3-5 lines)
   - What is the ONE opposition that makes this interesting? (1-2 sentences)
3. **STOP. Read vocabulary files NOW.** (mechanism catalog, components.css, tokens.css, prohibitions)
4. The vocabulary files are TOOLS to execute the commitment, not inputs to change it
5. Begin building from commitment

The skill must contain explicit language like:

> "STOP. You have made your creative commitment. Now read the vocabulary files below. They are your materials, not your instructions. If reading them makes you want to change your commitment, resist — your commitment came from the content, and the content hasn't changed."

### 4.2 Why This Matters

In the v1 pipeline, the TC agent and builder were different agents. The conviction brief was the only communication channel. This created 50:1 compression loss — the TC agent's 17,000 lines of thinking compressed to an 80-line brief.

In the combined skill, the agent carries the FULL UNDERSTANDING from thinking into building. The conviction brief shrinks from a 80-120 line handoff document to a 15-20 line self-commitment. The rest of the understanding is IN THE AGENT'S CONTEXT.

This is the single biggest quality improvement the merger enables. No compression loss. The agent who questioned the content IS the agent who writes the CSS.

---

## 5. Skill File Structure

### 5.1 Estimated Sections and Length

```
COMBINED SKILL (~400-500 lines estimated)

Section 0: Critical Principle (~15 lines)
  - "You are CONSTRUCTING, not DISCOVERING"
  - Metacognitive framing that applies to both thinking and building

Section 1: Content Engagement (~40 lines)
  - Content assessment (type, scope, section identification)
  - What to look for in content before formal questioning begins
  - Library access prohibition (don't read vocabulary until after commitment)

Section 2: Multi-Axis Questioning (~60 lines)
  - Core Four (FEEL/UNDERSTAND/DO/BECOME)
  - Extended axes (NAVIGATE/TRUST/EVALUATE/ORIENT/RECONCILE)
  - Structural triggers (COMPARE/IDENTIFY/DISCOVER/SEE/REMEMBER)
  - Output: needs + structural properties per axis
  - STRIPPED: pre-ranked opposition lists, pre-specified pair interactions

Section 3: Tension Derivation (~40 lines)
  - Side A (reader needs) vs Side B (design system personality — DERIVED AT RUNTIME)
  - Addition Test, BECAUSE test, SUBSTITUTION test
  - Tension spectrum and richness evaluation
  - STRIPPED: KortAI-specific tension landscape, hardcoded personality spectrum

Section 4: Compositional Idea (~40 lines)
  - Broadened from domain-metaphor-only to include dynamics, behaviors, experiences
  - Structural property extraction (5 categories, but as vocabulary not extraction procedure)
  - Commitment gate (lock-in before reading vocabulary)
  - Binary rejection checks (generalized)
  - STRIPPED: domain search territory, incompatible domain families

Section 5: The Commitment (~20 lines)
  - Self-commitment format (15-20 lines, for self, not handoff)
  - The STOP instruction: read vocabulary now, as tools not instructions
  - Permission to adapt expression, not change idea

Section 6: World Description (~15 lines)
  - Loaded from file at runtime (not hardcoded in skill)
  - The world the builder inhabits — stated as physics, not rules

Section 7: Building (~80 lines)
  - The 6 CSS channels
  - Boundary-by-boundary building (not channel-by-channel)
  - Transition table as planning tool
  - Multi-coherence at zone boundaries
  - Pacing assessment and rhythm variation
  - Adapt-before-inventing principle for components
  - Fractal consistency across scales
  - Concept-based CSS naming
  - Conventions as world physics (container, palette, fonts, borders)

Section 8: Self-Reflection (~30 lines)
  - 6-dimension reflection protocol (conviction, alternatives, surprises, impulses, experience, unresolved)
  - Written AFTER build, BEFORE any audit
  - The reflection travels WITH the artifact to PA

Section 9: Output Specification (~20 lines)
  - 3 files produced: output.html, _commitment.md, _reflection.md
  - Self-contained HTML with all CSS embedded
  - ARIA landmarks, responsive breakpoint, WCAG contrast

Section 10: Edge Cases (~30 lines)
  - Zero-tension content (assembly path)
  - Already-visual content
  - Long content (segment and unify)
  - Commitment decay during building (adapt expression, not idea)

TOTAL: ~390 lines
```

### 5.2 What's NOT in the Skill (Moved Elsewhere)

- **Gate runner:** Becomes a post-build tool invoked by the orchestrator or PA lead, not embedded in the builder's skill
- **PA deployment, auditor prompts, weaver synthesis:** Separate PA skill invoked after build completes
- **Routing decisions (SHIP/REFINE/RETHINK):** PA produces a verdict; the orchestrator acts on it
- **Screenshot capture:** Post-build responsibility (orchestrator or PA lead)
- **Mechanical patching:** Separate from the creative build process

---

## 6. Inputs and Outputs

### 6.1 Inputs

The skill needs these inputs provided by whoever invokes it (user directly, or a thin orchestrator):

| Input | Source | When Provided |
|-------|--------|---------------|
| Content markdown | User-specified file path | At invocation |
| World description | `ephemeral/build-page-v2/world-description.md` or equivalent | Loaded by skill (path in skill) |
| Prohibitions | `design-system/compositional-core/identity/prohibitions.md` | Loaded AFTER commitment |
| Tokens | `design-system/compositional-core/vocabulary/tokens.css` | Loaded AFTER commitment |
| Mechanism catalog | `design-system/compositional-core/grammar/mechanism-catalog.md` | Loaded AFTER commitment |
| Components CSS | `design-system/compositional-core/components/components.css` | Loaded AFTER commitment |
| Output directory | Derived from content slug + date | Created by skill or orchestrator |

**Key design decision: paths hardcoded vs discovered**

Currently the build-page v2 skill hardcodes all 7 reference file paths. This is correct for a system bound to one design system. If the skill is ever design-system-agnostic, the paths would need to be parameterized or discovered. For now: **hardcode the paths** in the skill. They are stable filesystem locations. The alternative (discovery at runtime) adds complexity without current benefit.

**Loading order is structural:**
1. Content (first — the agent reads what they're building for)
2. World description (second — establishes the world, informs Side B derivation)
3. The agent does ALL questioning and tension derivation here, with content + world in context
4. AFTER commitment: vocabulary files (mechanism catalog, components, tokens, prohibitions)
5. The agent builds with vocabulary as tools

This loading order is enforced by the skill's structure — vocabulary files appear AFTER the commitment section.

### 6.2 Outputs

The skill produces exactly 3 files:

| Output | Contents | Who Reads It |
|--------|----------|-------------|
| `output.html` | Complete self-contained HTML page (all CSS embedded) | PA auditors (via screenshots), user (directly) |
| `_commitment.md` | The 15-20 line self-commitment (replaces conviction brief) | PA weaver (for context on intent), REFINE builder (if invoked) |
| `_reflection.md` | 6-dimension reflection on the build | PA weaver (for creative state), REFINE builder (for deferred possibilities) |

**Why not the conviction brief?** The conviction brief was an 80-120 line document designed to transmit understanding across an agent boundary. With TC+building merged, there's no boundary to cross. The 15-20 line self-commitment captures what the agent committed to, which is all the PA weaver and a potential REFINE builder need. The rest of the understanding produced the HTML directly.

**Why the reflection matters:** The reflection is the agent's honest account of creative state at completion — what worked, what didn't, what was suppressed. PA auditors never see it (fresh-eyes principle). But the PA weaver reads it to bridge auditor perceptions to builder intent. And a REFINE builder reads it to understand what creative energy remains.

---

## 7. How Outputs Relate to PA

### 7.1 What PA Needs

PA's fresh-eyes principle is non-negotiable. Auditors receive:
- Screenshots of the page (captured AFTER build completes, by whatever serves as orchestrator)
- Their assigned experiential questions
- Nothing else — no commitment, no reflection, no gate results, no design vocabulary

The PA weaver (synthesis agent) receives:
- All auditor reports
- Screenshots (for its own experiential anchor)
- The builder's `_commitment.md` (to bridge auditor perceptions to builder intent)
- The builder's `_reflection.md` (to understand creative state)
- Gate results (if run by orchestrator) for diagnostic context

### 7.2 The Interface Between Build and PA

The combined skill does NOT invoke PA. It produces its outputs and stops. PA is invoked SEPARATELY. The interface is the filesystem:

```
{output_dir}/
  output.html          ← PA screenshots from this
  _commitment.md       ← PA weaver reads this
  _reflection.md       ← PA weaver reads this
```

**Who invokes PA?** Options:
1. **User manually:** `/perceptual-audit {output_dir}/output.html` — maximum control, but the user wanted to walk away
2. **Thin orchestrator:** A separate skill that calls the combined skill, then PA, then routes. This is essentially build-page v3 — but the orchestrator only does plumbing (file loading, screenshot capture, gate running, PA spawning), never creative work
3. **The combined skill itself:** After reflection, the skill could say "PA will now be invoked" and trigger it. But this breaks the separation — the builder should not control its own evaluation

**Recommendation: Option 2 (thin orchestrator).** The user's goal — "walk away from a running process and come back to the highest quality page" — requires automation beyond a single skill. A thin orchestrator (~100-150 lines) handles:
- Parse content path, create output directory
- Invoke combined skill (TC+Build)
- Verify outputs exist
- Start HTTP server, capture screenshots
- Run gate runner
- Invoke PA (spawn 5 auditors + weaver)
- Route based on PA verdict (SHIP / REFINE / RETHINK)
- If REFINE: invoke a DIFFERENT Opus agent with reflection + weaver synthesis + HTML

This orchestrator is far simpler than the current build-page v2 (957 lines → ~150 lines) because all creative content lives in the combined skill.

### 7.3 The REFINE Path

If PA says REFINE, a DIFFERENT Opus agent is spawned. This agent receives:
- The current `output.html`
- The PA weaver's synthesis
- The original builder's `_reflection.md`
- The original builder's `_commitment.md`
- The content markdown
- The vocabulary files (mechanism catalog, components, tokens, prohibitions)

The REFINE builder uses the current build-page v2 REFINE prompt template (lines 748-869), which is well-designed: "Your job is not to fix problems. Your job is to make the page more of what it already is."

The REFINE builder does NOT re-run TC thinking. It builds from the original builder's commitment, informed by PA perception. This is correct — the two-instance pattern (different agent for refinement) defeats continuation bias.

---

## 8. Self-Evaluation vs Deferred-to-PA

### 8.1 What the Builder Should Self-Evaluate

The combined skill includes the 6-dimension reflection, which IS self-evaluation — but creative self-evaluation, not quality auditing. The builder reflects on:
- What they were trying to achieve (conviction)
- What they rejected (alternatives)
- What surprised them (surprises)
- What they couldn't accommodate (impulses)
- What the page feels like (experience)
- What tension remains (unresolved)

This is healthy creative self-awareness. It does NOT include:
- Counting mechanisms
- Checking gate compliance
- Measuring background deltas
- Scoring PA questions

### 8.2 What is Deferred to PA

ALL quality evaluation is deferred to PA:
- Is this page designed? (PA-05 equivalent)
- Does the composition cohere? (multi-coherence perception)
- Is there rhythm? (pacing audit)
- Does the metaphor work structurally? (independent verification)
- What's the single best/worst moment? (fresh-eyes identification)

### 8.3 The Gap: Mechanical Compliance

There's a gap between creative self-reflection (builder does) and perceptual quality evaluation (PA does). Mechanical compliance — does the container width hit 940-960px? does every background satisfy R>=G>=B? — currently lives in the gate runner.

**Options:**
1. Builder self-checks mechanically before reflecting (current v1 approach — "Phase D: Self-verify")
2. Gate runner runs post-build before PA (current v2 approach)
3. Both — builder does a quick self-check, gate runner validates

**Recommendation: Option 2.** Mechanical compliance checking by the builder is low-value — the builder already absorbed the constraints as world physics. If they violated constraints, a self-check just tells them to redo work they should have done right. The gate runner catches violations definitively. The builder's cognitive budget is better spent on the reflection.

---

## 9. Walk Away and Come Back

### 9.1 The User's Goal

"Walk away from a running process and come back to the highest quality page."

This requires:
1. **Automated end-to-end:** No human decisions required between invocation and completion
2. **Quality floor:** The process must produce at least DESIGNED-tier output
3. **Self-correcting:** If the first build has issues, the process fixes them without user input
4. **Clear output:** The user returns to a verdict + the page, not 15 intermediate files

### 9.2 How the Combined Skill Enables This

The combined skill handles step 1 for the creative portion. But the full "walk away" experience requires the thin orchestrator (Section 7.2, Option 2):

```
USER: /build-page content.md
          |
ORCHESTRATOR: Create output dir, copy content
          |
ORCHESTRATOR: Invoke combined skill (Opus agent)
          |
  [COMBINED SKILL]: Read content → Question → Derive tension →
                     Commit → Read vocabulary → Build HTML →
                     Reflect → Write 3 files
          |
ORCHESTRATOR: Verify outputs exist
          |
ORCHESTRATOR: Start server, capture screenshots
          |
ORCHESTRATOR: Run gate runner
          |
ORCHESTRATOR: Invoke PA (5 auditors + weaver, Opus)
          |
PA WEAVER: Synthesize auditor reports → Verdict
          |
ORCHESTRATOR: Route on verdict
  ├── SHIP → Report to user
  ├── REFINE → Spawn different Opus with synthesis + reflection → Re-screenshot → Re-gate → Report
  └── RETHINK → Re-invoke combined skill with "your previous idea was rejected" constraint
```

**Total agents for a SHIP path:** 1 (combined skill) + 5 (PA auditors) + 1 (PA weaver) = 7 agents
**Total agents for a REFINE path:** 7 + 1 (REFINE builder) = 8 agents
**Compare to current v2:** 1 (Window 1) + 5 (PA auditors) + 1 (PA weaver) + 1 (REFINE) = 8 agents (same)

The agent count is similar, but the QUALITY is higher because:
- Zero compression loss at the TC→builder boundary (same agent)
- The builder who questioned the content writes the CSS
- Creative understanding stays in context, not in a brief

### 9.3 The REFINE Agent's Access to Context

The REFINE agent is a DIFFERENT Opus instance. It does NOT carry the original builder's TC understanding. But it receives:
- `_commitment.md` (15-20 lines — what the builder committed to)
- `_reflection.md` (20-35 sentences — what the builder experienced)
- PA weaver synthesis (creative direction from 5 independent perceptions)
- The HTML itself (the artifact)

This is MORE context than the current v2 REFINE builder gets, because the commitment and reflection are richer artifacts than a formal conviction brief. The REFINE builder reads what the original builder WAS TRYING TO DO and what they EXPERIENCED, not what a TC analyst told them to do.

---

## 10. Design System File Access

### 10.1 Hardcoded Paths (Current Approach)

The current build-page v2 hardcodes 7 Read calls:

```
[A] Read(ephemeral/build-page-v2/world-description.md)
[B] Read(~/.claude/skills/tension-composition/SKILL.md)
[C] Read({output_dir}/_content.md)
[D] Read(design-system/compositional-core/identity/prohibitions.md)
[E] Read(design-system/compositional-core/vocabulary/tokens.css)
[F] Read(design-system/compositional-core/grammar/mechanism-catalog.md)
[G] Read(design-system/compositional-core/components/components.css)
```

### 10.2 The Combined Skill's Approach

The combined skill is ITSELF the TC process + building instructions. It replaces [B] (the TC skill read). The remaining files split into two timing groups:

**PRE-COMMITMENT (loaded into skill prompt or read at start):**
- Content markdown (provided by user/orchestrator)
- World description (loaded by orchestrator into the agent's prompt, or read by agent)

**POST-COMMITMENT (read by agent after creative commitment):**
- `design-system/compositional-core/identity/prohibitions.md`
- `design-system/compositional-core/vocabulary/tokens.css`
- `design-system/compositional-core/grammar/mechanism-catalog.md`
- `design-system/compositional-core/components/components.css`

**How the agent accesses them:**

Option A: Orchestrator embeds all files in the prompt (current v2 approach)
- Pros: Agent doesn't need file access; everything in context
- Cons: Massive prompt (~30-40k tokens before the agent starts thinking); vocabulary files loaded before commitment (violates timing)

Option B: Skill instructs the agent to Read files at the right moment
- Pros: Correct timing (vocabulary after commitment); agent controls when to load what
- Cons: Agent needs Read tool access; skill must contain exact file paths

Option C: Hybrid — world description + content pre-loaded; skill instructs Read for vocabulary
- Pros: Correct timing AND manageable prompt size
- Cons: Slightly more complex orchestrator

**Recommendation: Option C.** The orchestrator provides content + world description in the agent's prompt. The skill file itself contains the TC thinking process + building instructions. At the commitment point, the skill instructs:

> "Now Read these files. They are your building materials:
> - `design-system/compositional-core/identity/prohibitions.md` (soul constraints)
> - `design-system/compositional-core/vocabulary/tokens.css` (CSS variables)
> - `design-system/compositional-core/grammar/mechanism-catalog.md` (mechanisms)
> - `design-system/compositional-core/components/components.css` (components)"

Paths are hardcoded because they're stable. If the design system moves, the skill updates.

---

## 11. Summary: Architecture Decision Record

### Decision 1: Combined skill merges TC thinking + building into one agent session
**Rationale:** Eliminates compression loss at TC→builder boundary. Agent who questions content writes CSS.

### Decision 2: PA remains a SEPARATE skill invoked afterward
**Rationale:** Fresh-eyes principle is non-negotiable. Auditors must not carry build context.

### Decision 3: The flow is THINK → COMMIT → BUILD → REFLECT (Option C)
**Rationale:** Thinking must complete before building to prevent premature commitment. But adaptation during building is permitted.

### Decision 4: The commitment moment is EXPLICIT, not gradual
**Rationale:** The commitment is the structural bridge between exploration and execution. Without it, the agent optimizes locally.

### Decision 5: Self-commitment replaces conviction brief (15-20 lines vs 80-120)
**Rationale:** No agent boundary to cross. Understanding stays in context.

### Decision 6: A thin orchestrator (~150 lines) handles plumbing for the "walk away" experience
**Rationale:** Creative work in the combined skill. Mechanical work (screenshots, gates, routing) in the orchestrator. Clear separation.

### Decision 7: Vocabulary files are read AFTER commitment, instructed by the skill
**Rationale:** Correct timing (materials after creative direction). Agent has Read tool access.

### Decision 8: Mechanical compliance is gate runner's job, not builder's
**Rationale:** Builder's cognitive budget is better spent on creative reflection.

### Decision 9: File paths are hardcoded in the skill
**Rationale:** Stable filesystem locations. Discovery adds complexity without benefit.

### Decision 10: REFINE uses a different Opus agent (unchanged from v2)
**Rationale:** Two-instance pattern defeats continuation bias. REFINE builder receives commitment + reflection + PA synthesis.

---

## 12. What Changes, What Stays, What Disappears

### STAYS (proven, carries forward)
- Multi-axis questioning (FEEL/UNDERSTAND/DO/BECOME + extended + structural)
- Addition Test, BECAUSE test, SUBSTITUTION test
- Constructing-not-discovering metacognitive principle
- 6 CSS channels as the expression vocabulary
- Boundary-by-boundary building
- Multi-coherence transition table
- Builder reflection (6 dimensions)
- Fresh-eyes PA (separate, context-starved)
- Different agent for REFINE
- All Opus for creative agents

### CHANGES (adapted for merged context)
- Conviction brief → self-commitment (80-120 lines → 15-20 lines)
- Side B hardcoded in skill → Side B derived from world-description at runtime
- Domain-metaphor-only → broadened compositional idea space
- Phase numbering for orchestrator → natural section flow for one agent
- TC as sub-skill invocation → TC thinking embedded in building skill

### DISAPPEARS (no longer needed)
- Orchestrator-heavy plumbing in the combined skill (moves to thin orchestrator)
- TC handoff artifacts (conventions brief, detection expectations, exploration recommendations)
- Sub-skill vs standalone mode distinction
- Pre-computed tension landscapes and domain search territories
- Agent spawning within the creative session
- Gate running within the creative session
